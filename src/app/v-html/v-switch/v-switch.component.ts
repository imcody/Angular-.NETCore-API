import { Component, Input } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../AbstractValueAccessor';

@Component({
  selector: 'v-switch',
  templateUrl: './v-switch.component.html',
  providers: [MakeProvider(VZeroSwitchComponent)]
})
export class VZeroSwitchComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() onLabel = 'on';
  @Input() offLabel = 'off';
  @Input() normalFont = 'false';
}
