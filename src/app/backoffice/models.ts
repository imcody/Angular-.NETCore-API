import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';

export abstract class EditEntityComponentBase extends AppComponentBase {

    abstract modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active: boolean = false;
    saving: boolean = false;

    constructor(
        injector: Injector) {
        super(injector);
    }

    onShown(): void {
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
