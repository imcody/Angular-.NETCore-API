import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail-property',
    templateUrl: './detail-property.component.html'
})
export class DetailPropertyComponent implements OnInit {
    @Input() label: string;
    @Input() value: number | null | undefined;
    valueStr: string;
    ngOnInit(): void {
        if (this.value) {
            this.valueStr = `RSID: ${this.value}`;
        }
    }
}
