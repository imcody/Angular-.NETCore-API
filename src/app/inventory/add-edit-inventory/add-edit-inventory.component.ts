import { Component, ViewChild, Injector, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { InventoryDto, RegisterInventoryDto } from '@shared/service-proxies/service-proxies';
import { finalize, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@app/shared/app-component-base';
import { InventoryService } from '../inventory.service';
import * as moment from 'moment';
import { SelectItem } from '@app/v-html';

@Component({
    selector: 'app-add-edit-inventory-modal',
    templateUrl: './add-edit-inventory.component.html'
})
export class AddEditInventoryComponent extends AppComponentBase {

    @ViewChild('addEditInventoryModal') modal: ModalDirective;

    active: boolean = false;
    saving: boolean = false;
    isEditForm: boolean;
    inventory: RegisterInventoryDto | InventoryDto;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private service: InventoryService) {
        super(injector);
    }

    _date: Date = new Date();
    get date() {
        return this._date;
    }
    set date(value: Date) {
        this._date = value;
        if (!!this.inventory) {
            var date_utc = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0);
            this.inventory.arrivalDate = moment.utc(date_utc);
        }
    }

    show(id?: number): void {

        let inventoryObservable: Observable<RegisterInventoryDto | InventoryDto>;
        if (!!id && id > 0) {
            inventoryObservable = this.service
                .get(id)
                .pipe(map(x => {
                    let inventoryDto = new InventoryDto();
                    inventoryDto.init(x);
                    this.date = x.arrivalDate.toDate();
                    return inventoryDto;
                }));
            this.isEditForm = true;
        }
        else {
            inventoryObservable = of(new RegisterInventoryDto());
            this.isEditForm = false;
        }
        inventoryObservable.subscribe(inventory => {
            this.active = true;
            this.inventory = inventory;
            this.modal.show();
        })
    }

    save(): void {
        this.saving = true;
        this.service.save(this.inventory)
            .pipe(
                finalize(() => { this.saving = false; }))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
