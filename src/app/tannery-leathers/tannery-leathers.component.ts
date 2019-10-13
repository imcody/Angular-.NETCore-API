import { Component, Injector, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AddEditTanneryLeatherComponent } from './add-edit-tannery-leather/add-edit-tannery-leather.component';
import { TanneryLeathersService } from './tannery-leathers.service';
import { finalize } from 'rxjs/operators';
import { TanneryLeatherDto } from '@app/shared/service-proxies/service-proxies';

@Component({
    templateUrl: './tannery-leathers.component.html',
    animations: [appModuleAnimation()]
})
export class TanneryLeathersComponent extends PagedListingComponentBase<TanneryLeatherDto> implements OnInit {
    protected delete(entity: TanneryLeatherDto): void {
    }

    @ViewChild('addEditTanneryLeatherModal') addEditTanneryLeatherModal: AddEditTanneryLeatherComponent;

    active: boolean = false;
    leathers: TanneryLeatherDto[] = [];

    constructor(
        injector: Injector,
        private _leatherService: TanneryLeathersService) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    getType(leather: TanneryLeatherDto) {
        return leather.isCrust ? "Crust" : "Leather";
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._leatherService.getAll()
            .pipe(
                finalize(() => {
                    finishedCallback();
                }))
            .subscribe((result: TanneryLeatherDto[]) => {
                this.leathers = result;
                this.showPaging({ items: result, totalCount: result.length }, 1);
            });
    }
    // Show Modals
    registerLeather(): void {
        this.addEditTanneryLeatherModal.show(null);
    }

    editLeather(leather: TanneryLeatherDto): void {
        this.addEditTanneryLeatherModal.show(leather.clone());
    }

    moveToStorage(leather: TanneryLeatherDto): void {
        this.message.confirm("Do you want to move leather to storage? It cannot be reversed.",
            confirm => {
                if (confirm) {
                    this._leatherService.moveToStorage(leather.id).subscribe(res => {
                        if (res == true) {
                            this.refresh();
                        }
                    });
                }
            });
    }
}
