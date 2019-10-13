import { Component, Input, OnInit  } from "@angular/core";
import { MakeProvider, AbstractValueAccessor } from "@app/v-html/AbstractValueAccessor";
import { SelectItem } from "@app/v-html";

@Component({
    selector: 'edit-property',
    templateUrl: './edit-property.component.html',
    providers: [MakeProvider(EditPropertyComponent)]
})
export class EditPropertyComponent extends AbstractValueAccessor implements OnInit {
    @Input() label: string;
    @Input() name: string;
    @Input() required = 'false';
    @Input() errorMessage = '';
    @Input() placeholder: string = '';
    @Input() options: SelectItem[] = [];
    @Input() inline = "false";
    @Input() showClear: boolean = false;
    @Input() startValue: number;
    isDisplayed = false;
    ngOnInit(): void {
        this.isDisplayed = !this.startValue || this.options.filter(x=> x.value == this.startValue).length > 0;
    }
}
