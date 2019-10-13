import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'v-modal',
    templateUrl: './v-modal.component.html',
    styleUrls: ['./v-modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class VModalComponent {

    @Input() title = '';
    @Input() subtitle = '';
    constructor() { }


}


