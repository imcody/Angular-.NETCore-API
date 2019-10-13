import { Component, ViewChild, Injector, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { CreateUserDto, RoleDto } from '@shared/service-proxies/service-proxies';
import { EditUserComponentBase } from '../model';
import { finalize } from 'rxjs/operators';
import { roles } from '../roles';

@Component({
    selector: 'app-create-user-modal',
    templateUrl: './create-user.component.html'
})
export class CreateUserComponent extends EditUserComponentBase implements OnInit {

    @ViewChild('createUserModal') modal: ModalDirective;

    roles = [];
    farms = null;

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

    show(): void {
        this.farms = null;
        this.service.getFarms().subscribe(x => {
            this.farms = x.map(x => { return { label: x.name, value: x.id } });
        });
        this.active = true;
        this.user = new CreateUserDto();
        this.user.init({ isActive: true, userRole: "Farmer", farmId: null });
        this.modal.show();
    }

    save(): void {
        this.saving = true;
        this.service.edit(<CreateUserDto>this.user)
            .pipe(
                finalize(() => { this.saving = false; }))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }
}
