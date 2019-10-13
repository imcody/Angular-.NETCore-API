import { Component, ViewChild, Injector, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { finalize, map } from 'rxjs/operators';
import { AppComponentBase } from '@app/shared/app-component-base';
import { TanneryLeathersService } from '../tannery-leathers.service';
import { RegisterTanneryLeatherInput, UpdateTanneryLeatherInput, TanneryLeatherDto, ValidateLeatherInput } from '@app/shared/service-proxies/service-proxies';

@Component({
    selector: 'app-add-edit-tannery-leather-modal',
    templateUrl: './add-edit-tannery-leather.component.html'
})
export class AddEditTanneryLeatherComponent extends AppComponentBase {

    @ViewChild('addEditTanneryLeatherModal') modal: ModalDirective;

    active: boolean = false;
    saving: boolean = false;
    isEditForm: boolean;
    leather: RegisterTanneryLeatherInput | UpdateTanneryLeatherInput;

    ppNo: string;
    idNo: string;

    step2: boolean = false;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private service: TanneryLeathersService) {
        super(injector);
    }

    show(item: TanneryLeatherDto): void {
        this.active = true;
        this.step2 = false;

        if (!!item) {
            this.leather = new UpdateTanneryLeatherInput({
                id: item.id,
                extra: item.extra,
                isCrust: item.isCrust,
                isWaxed: item.isWaxed,
                pricePerFt: item.pricePerFt,
                thickness: item.thickness,
                totalArea: item.totalArea
            });
            this.ppNo = item.ppNo;
            this.idNo = item.idNo;
            this.isEditForm = true;
            this.step2 = true;
        }
        else {
            this.leather = new RegisterTanneryLeatherInput();
            this.isEditForm = false;
        }
        this.modal.show();
    }

    save(): void {
        this.saving = true;

        if (!this.step2) {
            var input = new ValidateLeatherInput();
            input.idNumber = (<RegisterTanneryLeatherInput>this.leather).idNo;
            input.ppNumber = (<RegisterTanneryLeatherInput>this.leather).ppNo;
            this.service.validate(input)
                .subscribe(valid => {
                    if (!valid) {
                        this.message.error('Leather not found or already registered');
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
