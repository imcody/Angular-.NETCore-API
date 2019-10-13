import { Component, ViewChild, Injector, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FarmDto, CreateFarmDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@app/shared/app-component-base';
import { FarmsService } from '../farms.service';

@Component({
    selector: 'app-add-edit-farm-modal',
    templateUrl: './add-edit-farm.component.html'
})
export class AddEditFarmComponent extends AppComponentBase {

    @ViewChild('addEditFarmModal') modal: ModalDirective;

    active: boolean = false;
    saving: boolean = false;
    mode: "add" | "edit";
    farm: CreateFarmDto | FarmDto;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector, private service: FarmsService) {
        super(injector);
    }

    show(id?: number): void {
        let farmObservable: Observable<CreateFarmDto | FarmDto>;
        if (!!id && id > 0) {
            farmObservable = this.service.get(id);
            this.mode = "edit";
        }
        else {
            farmObservable = of(new CreateFarmDto());
            this.mode = "add";
        }
        farmObservable.subscribe(farm => {
            this.active = true;
            this.farm = farm;
            this.modal.show();
        })
    }

    save(): void {
        this.saving = true;
        this.service.save(this.farm)
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
