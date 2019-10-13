import { Component, ViewChild, Injector, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { LeatherDto, CreateLeatherDto, FarmInfoDto } from '@shared/service-proxies/service-proxies';
import { finalize, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponentBase } from '@app/shared/app-component-base';
import { LeathersService } from '../leathers.service';
import * as moment from 'moment';
import { SelectItem } from '@app/v-html';

@Component({
    selector: 'app-add-edit-leather-modal',
    templateUrl: './add-edit-leather.component.html'
})
export class AddEditLeatherComponent extends AppComponentBase implements OnInit {
    
    @ViewChild('addEditLeatherModal') modal: ModalDirective;
    
    active: boolean = false;
    saving: boolean = false;
    isEditForm: boolean;
    leather: CreateLeatherDto | LeatherDto;
    canSelectFarm: boolean;
    farms: SelectItem[] = null;
    genders: SelectItem[] = [
        { label: 'Ko', value: 'Ko' },
        { label: 'Kviga', value: 'Kviga' },
        { label: 'Tjur', value: 'Tjur' }
    ];
    minDate: Date = null;
    
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    constructor(injector: Injector,
        private service: LeathersService) {
        super(injector);
    }

    ngOnInit() {
        this.canSelectFarm = this.isGranted("Leather.SelectFarm");
    }


    _date: Date = new Date();
    get date() {
        return this._date;
    }
    set date(value: Date) {
        this._date = value;
        if (!!this.leather) {
            var date_utc = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0);
            this.leather.estimatedSlaughterDate = moment.utc(date_utc);
        }
    }

    show(id?: number): void {
        this._date = new Date();
        if (this.canSelectFarm) {
            this.service.getFarms().subscribe(x => {
                this.farms = x.map(x => { return { label: x.name, value: x.id } })
            });
        }
        let leatherObservable: Observable<CreateLeatherDto | LeatherDto>;
        if (!!id && id > 0) {
            leatherObservable = this.service
                .get(id)
                .pipe(map(x => {
                    let leatherDto = new LeatherDto();
                    leatherDto.init(x);
                    this.date = x.estimatedSlaughterDate.toDate();
                    return leatherDto;
                }));
            this.isEditForm = true;
        }
        else {
            leatherObservable = of(new CreateLeatherDto());
            this.isEditForm = false;
        }
        leatherObservable.subscribe(leather => {
            this.active = true;

            this.minDate = new Date();
            if (leather.estimatedSlaughterDate && leather.estimatedSlaughterDate.toDate() < this.minDate) {
                this.minDate = leather.estimatedSlaughterDate.toDate();
            }
            this.leather = leather;

            this.modal.show();
        })
    }

    save(): void {
        this.saving = true;
        this.service.save(this.leather)
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
