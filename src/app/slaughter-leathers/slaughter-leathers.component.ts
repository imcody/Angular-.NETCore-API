import { Component, Injector, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AddEditSlaughterLeatherComponent } from './add-edit-slaughter-leather/add-edit-slaughter-leather.component';
import { SlaughterLeathersService } from './slaughter-leathers.service';
import { finalize } from 'rxjs/operators';
import { SlaughterhouseLeatherDto, UpdateLeatherInput } from '@app/shared/service-proxies/service-proxies';

@Component({
    templateUrl: './slaughter-leathers.component.html',
    animations: [appModuleAnimation()]
})
export class SlaughterLeathersComponent extends PagedListingComponentBase<SlaughterhouseLeatherDto> implements OnInit {
    protected delete(entity: SlaughterhouseLeatherDto): void {
    }

    @ViewChild('addEditSlaughterLeatherModal') addEditSlaughterLeatherModal: AddEditSlaughterLeatherComponent;

    active: boolean = false;
    leathers: SlaughterhouseLeatherDto[] = [];

    constructor(
        injector: Injector,
        private _leatherService: SlaughterLeathersService) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._leatherService.getAll()
            .pipe(
                finalize(() => {
                    finishedCallback();
                }))
            .subscribe((result: SlaughterhouseLeatherDto[]) => {
                this.leathers = result;
                this.showPaging({items: result, totalCount: result.length}, 1);
            });
    }
    // Show Modals
    registerLeather(): void {
        this.addEditSlaughterLeatherModal.show(null);
    }

    editLeather(leather: SlaughterhouseLeatherDto): void {
        this.addEditSlaughterLeatherModal.show(leather.clone());
    }
}
