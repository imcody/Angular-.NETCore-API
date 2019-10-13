import { Component, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
  selector: 'v-toggle',
  templateUrl: './v-toggle.component.html',
  providers: [MakeProvider(VZeroToggleComponent)]
})
export class VZeroToggleComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() onLabel = 'on';
  @Input() offLabel = 'off';
  @Input() normalFont = 'false';
}
