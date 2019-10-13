import { Component, Injector, ViewChild, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AddEditInventoryComponent } from './add-edit-inventory/add-edit-inventory.component';
import {
    PagedResultDtoOfInventoryDto,
    InventoryDto
} from '@shared/service-proxies/service-proxies';
import { InventoryService } from './inventory.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './inventory.component.html',
    animations: [appModuleAnimation()]
})
export class InventoryComponent extends PagedListingComponentBase<InventoryDto> implements OnInit{

    @ViewChild('addEditInventoryModal') addEditInventoryModal: AddEditInventoryComponent;

    active: boolean = false;
    inventory: InventoryDto[] = [];

    constructor(
        injector: Injector,
        private _inventoryService: InventoryService) {
        super(injector);
    }

    ngOnInit(){
        super.ngOnInit();
    }

    list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function, refresh: boolean = false): void {
        this._inventoryService.getAll(request.skipCount, request.maxResultCount, refresh)
            .pipe(
                finalize(() => {
                    finishedCallback();
                }))
            .subscribe((result: PagedResultDtoOfInventoryDto) => {
                this.inventory = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    // Show Modals
    registerInventory(): void {
        this.addEditInventoryModal.show(null);
    }

    editInventory(inventory: InventoryDto): void {
        this.addEditInventoryModal.show(inventory.id);
    }

    protected delete(entity: InventoryDto): void {}
}
