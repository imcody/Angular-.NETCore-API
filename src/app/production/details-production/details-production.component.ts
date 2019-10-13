
import { Component, ViewChild, Injector, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ProductionDto, InventoryItemDto, ProductionDetailsDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@app/shared/app-component-base';
import { ProductionsService } from '../productions.service';
import { SelectItem } from '@app/v-html';

@Component({
    selector: 'app-details-production-modal',
    templateUrl: './details-production.component.html'
})
export class DetailsProductionComponent extends AppComponentBase {

    @ViewChild('detailsProductionModal') modal: ModalDirective;

    active: boolean = false;

    production: ProductionDetailsDto;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private productionService: ProductionsService) {
        super(injector);
    }

    show(id: number): void {
        this.productionService.getDetails(id)
            .subscribe(x => {
                this.active = true;
                this.production = x;
                this.modal.show();
            })
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
