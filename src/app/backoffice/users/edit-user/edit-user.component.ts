import { Component, ViewChild, Injector, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { EditUserComponentBase } from '../model';
import { finalize } from 'rxjs/operators';
import { roles } from '../roles';

@Component({
    selector: 'app-edit-user-modal',
    templateUrl: './edit-user.component.html'
})
export class EditUserComponent extends EditUserComponentBase implements OnInit {

    @ViewChild('editUserModal') modal: ModalDirective;

    roles = [];
    farms = [];

    constructor(
        injector: Injector) {
        super(injector);
    }

    get isFarmRequired(): boolean {
        return this.user.userRole === "Farmer";
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.roles = roles;
    }

    show(id: number): void {
        this.farms = null;
        this.service.getFarms().subscribe(x => {
            this.farms = x.map(x => { return { label: x.name, value: x.id } });
        });
        this.service.get(id)
            .subscribe(
                (result) => {
                    this.user = result;
                    this.active = true;
                    this.modal.show();
                }
            );
    }

    save(): void {
        this.saving = true;
        this.service.edit(this.user)
            .pipe(
                finalize(() => { this.saving = false; }))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }
}
