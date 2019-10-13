import { Component, Injector, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { EditProductionComponent } from './edit-production/edit-production.component';
import {
    PagedResultDtoOfProductionDto,
    ProductionDto,
    InventoryItemDto
} from '@shared/service-proxies/service-proxies';
import { ProductionsService } from './productions.service';
import { finalize } from 'rxjs/operators';
import { DetailsProductionComponent } from './details-production/details-production.component';
import { SelectControlValueAccessor } from '@angular/forms';
import { SelectItem } from '@app/v-html';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './productions.component.html',
    animations: [appModuleAnimation()]
})
export class ProductionsComponent extends PagedListingComponentBase<ProductionDto> implements OnInit {

    @ViewChild('editProductionModal') editProductionModal: EditProductionComponent;

    active: boolean = false;
    productions: ProductionDto[] = [];
    inventory: SelectItem[] = null;

    constructor(
        injector: Injector,
        private _productionService: ProductionsService) {
        super(injector);
    }

    canAdd: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canSeeStatus: boolean;
    isStep1: boolean;
    isStep2: boolean;

    ngOnInit() {
        this._productionService.getInventory().subscribe(x => {
            this.inventory = x.map(x => { return { label: x.inventoryName, value: x.id } })
        })

        this.canAdd = this.permission.isGranted("Production.Admin");
        this.canEdit = this.permission.isGranted("Pages.Shoemaker.Step1") ||
            this.permission.isGranted("Pages.Shoemaker.Step2");
        this.canDelete = this.permission.isGranted("Production.Admin");
        this.canSeeStatus = this.permission.isGranted("Production.Admin");
        this.isStep1 = this.permission.isGranted("Pages.Shoemaker.Step1");
        this.isStep2 = this.permission.isGranted("Pages.Shoemaker.Step2");
        super.ngOnInit();
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._productionService.getAll(request.skipCount, request.maxResultCount, refresh)
            .pipe(
                finalize(() => {
                    finishedCallback();
                }))
            .subscribe((result: PagedResultDtoOfProductionDto) => {
                this.productions = result.items;
                this.clearCache();
                this.showPaging(result, pageNumber);
            });
    }

    delete(production: ProductionDto): void {
        abp.message.confirm(
            'Delete production?',
            (result: boolean) => {
                if (result) {
                    this._productionService.delete(production.id)
                        .subscribe(() => {
                            abp.notify.info('Production deleted');
                            this.refresh();
                        });
                }
            }
        );
    }

    private clearCache() {
        this.skinsUsedCountCache = {};
        this.canEditCache = {};
    }

    skinsUsedCountCache: any;
    skinsUsed(production: ProductionDto) {
        if (!this.skinsUsedCountCache[production.id]) {
            let notNull = [
                production.upperLeatherId,
                production.liningLeatherId,
                production.backCounterLeatherId,
                production.weltLeatherId,
                production.soleLeatherId,
                production.heelLeatherId,
                production.inSockLeatherId,
                production.fillingLeatherId,
                production.reinforcementLeatherId,
                production.removableInSockLeatherId]
                .filter(x => x != null && x != undefined);

            let temp = {};
            for (let id of notNull) {
                temp[id] = true;
            }
            this.skinsUsedCountCache[production.id] = Object.keys(temp).length;
        }
        return this.skinsUsedCountCache[production.id];
    }

    register() {
        let func = (x: number) => this._productionService.registerStep1(x);
        if (this.isStep2) {
            func = (x: number) => this._productionService.registerStep2(x);
        }

        let id = +prompt("Provide production id");
        if (id && +id != NaN) {
            func(+id)
                .subscribe(_ => {
                    this.refresh();
                });
        }
    }

    complete(production: ProductionDto) {
        this.message.confirm("Do you want to mark production as completed?", res => {
            if (res) {
                this._productionService.complete(production.id).subscribe(x => {
                    this.refresh();
                    abp.notify.info('Production marked as completed');
                });
            }
        })
    }

    canEditCache: any = {};
    canBeEdited(production: ProductionDto) {
        if (this.inventory.length == 0) {
            return false;
        }

        if (!this.canEditCache[production.id]) {
            let props = [production.upperLeatherId,
            production.liningLeatherId,
            production.backCounterLeatherId,
            production.weltLeatherId,
            production.soleLeatherId,
            production.heelLeatherId,
            production.inSockLeatherId,
            production.fillingLeatherId,
            production.reinforcementLeatherId,
            production.removableInSockLeatherId];

            for (let prop of props) {
                if (!prop || this.inventory.filter(x => x.value == prop).length > 0) {
                    this.canEditCache[production.id] = true;
                    break;
                }
            }
        }
        return this.canEditCache[production.id] == true;
    }

    canBecomeCompleted(production: ProductionDto) {
        return !!production.upperLeatherId &&
            !!production.liningLeatherId &&
            !!production.backCounterLeatherId &&
            !!production.weltLeatherId &&
            !!production.soleLeatherId &&
            !!production.heelLeatherId &&
            !!production.inSockLeatherId &&
            !!production.fillingLeatherId &&
            !!production.reinforcementLeatherId &&
            !!production.removableInSockLeatherId;
    }

    createProduction(): void {
        this.message.confirm("Do you want to register new production?", res => {
            if (res) {
                this._productionService.create()
                    .subscribe(() => {
                        this.refresh();
                    });
            }
        });
    }

    editProduction(production: ProductionDto): void {
        this.editProductionModal.show(production.clone());
    }
}
