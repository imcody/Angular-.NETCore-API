
import { Component, ViewChild, Injector, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { LeatherDetailsDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@app/shared/app-component-base';
import { LeathersService } from '../leathers.service';

@Component({
    selector: 'app-leather-details',
    templateUrl: './leather-details.component.html'
})
export class LeatherDetailsComponent extends AppComponentBase {

    @ViewChild('leatherDetailsModal') modal: ModalDirective;

    active: boolean = false;
    id: number;
    leather: LeatherDetailsDto;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private leatherService: LeathersService) {
        super(injector);
    }

    show(id: number): void {
        this.id=id;
        this.leatherService.getDetails(id)
            .subscribe(x => {
                this.active = true;
                this.leather = x;
                this.modal.show();
            })
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
