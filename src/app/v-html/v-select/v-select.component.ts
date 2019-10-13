import { Component, Input  } from "@angular/core";
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";
import { SelectItem } from '../';

@Component({
    selector: 'v-select',
    templateUrl: './v-select.component.html',
    providers: [MakeProvider(VZeroSelectComponent)]
})
export class VZeroSelectComponent extends AbstractValueAccessor {
    @Input() label: string;
    @Input() name: string;
    @Input() required = 'false';
    @Input() errorMessage = '';
    @Input() placeholder: string = '';
    @Input() options: SelectItem[] = [];
    @Input() inline = "false";
    @Input() showClear: boolean = false;
}
