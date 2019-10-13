import { Component, Injector, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AddEditLeatherComponent } from './add-edit-leather/add-edit-leather.component';
import {
    PagedResultDtoOfLeatherDto,
    LeatherDto
} from '@shared/service-proxies/service-proxies';
import { LeathersService } from './leathers.service';
import { finalize } from 'rxjs/operators';
import { LeatherDetailsComponent } from './leather-details/leather-details.component';

@Component({
    templateUrl: './leathers.component.html',
    animations: [appModuleAnimation()]
})
export class LeathersComponent extends PagedListingComponentBase<LeatherDto> implements OnInit {

    @ViewChild('addEditLeatherModal') addEditLeatherModal: AddEditLeatherComponent;
    @ViewChild('leatherDetailsModal') leatherDetailsModal: LeatherDetailsComponent;

    active: boolean = false;
    leathers: LeatherDto[] = [];

    constructor(
        injector: Injector,
        private _leatherService: LeathersService) {
        super(injector);
    }

    canAdd: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canSeeFarm: boolean;
    canSeeDetails: boolean;
    
    ngOnInit() {
        this.canAdd = this.permission.isGranted("Leather.Add");
        this.canEdit = this.permission.isGranted("Leather.Edit");
        this.canDelete = this.permission.isGranted("Leather.Delete");
        this.canSeeFarm = this.permission.isGranted("Leather.SelectFarm");
        this.canSeeDetails = this.permission.isGranted("Leather.Details");
        super.ngOnInit();
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._leatherService.getAll(request.skipCount, request.maxResultCount, refresh)
            .pipe(
                finalize(() => {
                    finishedCallback();
                }))
            .subscribe((result: PagedResultDtoOfLeatherDto) => {
                this.leathers = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    delete(leather: LeatherDto): void {
        abp.message.confirm(
            'Delete animal?',
            (result: boolean) => {
                if (result) {
                    this._leatherService.delete(leather.id)
                        .subscribe(() => {
                            abp.notify.info('Animal deleted');
                            this.refresh();
                        });
                }
            }
        );
    }

    // Show Modals
    showDetails(leather: LeatherDto): void {
        this.leatherDetailsModal.show(leather.id);
    }

    createLeather(): void {
        this.addEditLeatherModal.show(null);
    }

    editLeather(leather: LeatherDto): void {
        this.addEditLeatherModal.show(leather.id);
    }
}
