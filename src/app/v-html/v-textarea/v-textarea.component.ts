import { Component, Input } from "@angular/core";
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
    selector: 'v-textarea',
    templateUrl: './v-textarea.component.html',
    providers: [MakeProvider(VZeroTextAreaComponent)]
})
export class VZeroTextAreaComponent extends AbstractValueAccessor {
    @Input() label: string;
    @Input() name: string;
    @Input() placeholder: string = '';
    @Input() required = 'false';
    @Input() rows = 3;
    @Input() errorMessage = '';
    @Input() pattern: '';
    @Input() inline = "false";
    @Input() colwidth: string = '';
}
