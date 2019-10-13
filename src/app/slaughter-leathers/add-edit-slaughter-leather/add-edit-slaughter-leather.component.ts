import { Component, ViewChild, Injector, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { finalize, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@app/shared/app-component-base';
import { SlaughterLeathersService } from '../slaughter-leathers.service';
import { RegisterLeatherInput, UpdateLeatherInput, SlaughterhouseLeatherDto, ValidateLeatherInput } from '@app/shared/service-proxies/service-proxies';

@Component({
    selector: 'app-add-edit-slaughter-leather-modal',
    templateUrl: './add-edit-slaughter-leather.component.html',
    styleUrls: ['add-edit-slaughter-leather.component.scss']
})
export class AddEditSlaughterLeatherComponent extends AppComponentBase {

    @ViewChild('addEditSlaughterLeatherModal') modal: ModalDirective;

    active: boolean = false;
    saving: boolean = false;
    isEditForm: boolean;
    leather: RegisterLeatherInput | UpdateLeatherInput;

    ppNo: string;
    idNo: string;

    step2: boolean = false;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private service: SlaughterLeathersService) {
        super(injector);
    }

    show(item: SlaughterhouseLeatherDto): void {
        this.active = true;
        this.step2 = false;

        if (!!item) {
            this.leather = new UpdateLeatherInput({
                earsOn: item.earsOn,
                id: item.id,
                weight: item.weight,
            });
            this.ppNo = item.ppNo;
            this.idNo = item.idNo;
            this.isEditForm = true;
            this.step2 = true;
        }
        else {
            this.leather = new RegisterLeatherInput();
            this.isEditForm = false;
        }
        this.modal.show();
    }

    save(): void {
        this.saving = true;

        if (!this.step2) {
            var input = new ValidateLeatherInput();
            input.idNumber = (<RegisterLeatherInput>this.leather).idNo;
            input.ppNumber = (<RegisterLeatherInput>this.leather).ppNo;
            this.service.validate(input)
                .subscribe(valid => {
                    if (!valid) {
                        this.message.error('Animal not found or already registered');
                    }
                    else {
                        this.step2 = true;
                    }
                    this.saving = false;
                });
        }
        else {
            this.service.save(this.leather)
                .pipe(
                    finalize(() => { this.saving = false; }))
                .subscribe(() => {
                    this.notify.info(this.l('SavedSuccessfully'));
                    this.close();
                    this.modalSave.emit(null);
                });
        }
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
