
import { Component, ViewChild, Injector, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ProductionDto, InventoryItemDto } from '@shared/service-proxies/service-proxies';
import { finalize, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@app/shared/app-component-base';
import { ProductionsService } from '../productions.service';
import * as moment from 'moment';
import { SelectItem } from '@app/v-html';
import { CreateProductionDto } from '../create-production-dto';

@Component({
    selector: 'app-edit-production-modal',
    templateUrl: './edit-production.component.html'
})
export class EditProductionComponent extends AppComponentBase {


    @ViewChild('editProductionModal') modal: ModalDirective;

    active: boolean = false;
    saving: boolean = false;
    isEditForm: boolean;
    production: ProductionDto;
    @Input("step1") isStep1: boolean;
    @Input() inventory: SelectItem[];
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private service: ProductionsService) {
        super(injector);
    }

    _date: Date = new Date();
    get date() {
        return this._date;
    }
    set date(value: Date) {
        this._date = value;
        if (!!this.production) {
            var date_utc = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0);
            this.production.departureTime = moment.utc(date_utc);
        }
    }

    show(production: ProductionDto): void {
        this.active = true;
        this.production = production;
        
        console.log(production)
        if (production.departureTime){
            this.date = production.departureTime.toDate(); 
        }
        this.modal.show();
    }

    save(): void {
        this.saving = true;
        this.service.update(this.production)
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
