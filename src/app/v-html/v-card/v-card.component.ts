import { Component, Input } from '@angular/core';

@Component({
    selector: 'v-card',
    templateUrl: './v-card.component.html',
    styleUrls: ['./v-card.component.scss'],
})

export class VCardComponent {
    @Input() title = '';
    @Input() subtitle = '';

    constructor() { }


}


