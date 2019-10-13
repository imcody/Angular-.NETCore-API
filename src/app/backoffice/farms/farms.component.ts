import { Component, Injector, ViewChild } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AddEditFarmComponent } from './add-edit-farm/add-edit-farm.component';
import {
    PagedResultDtoOfFarmDto,
    FarmDto
} from '@shared/service-proxies/service-proxies';
import { FarmsService } from './farms.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './farms.component.html',
    animations: [appModuleAnimation()]
})
export class FarmsComponent extends PagedListingComponentBase<FarmDto> {

    @ViewChild('addEditFarmModal') addEditFarmModal: AddEditFarmComponent;

    active: boolean = false;
    farms: FarmDto[] = [];

    constructor(
        injector: Injector,
        private _farmService: FarmsService) {
        super(injector);
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._farmService.getAll(request.skipCount, request.maxResultCount, refresh)
            .pipe(
                finalize(() => {
                    finishedCallback();
            }))
            .subscribe((result: PagedResultDtoOfFarmDto) => {
                this.farms = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    delete(farm: FarmDto): void {
        abp.message.confirm(
            'Delete farm \'' + farm.name + '\'?',
            (result: boolean) => {
                if (result) {
                    this._farmService.delete(farm.id)
                        .subscribe(() => {
                            abp.notify.info('Deleted farm: ' + farm.name);
                            this.refresh();
                        });
                }
            }
        );
    }

    // Show Modals
    createFarm(): void {
        this.addEditFarmModal.show(null);
    }

    editFarm(farm: FarmDto): void {
        this.addEditFarmModal.show(farm.id);
    }
}
