import { Component, Input } from '@angular/core';

@Component({
  selector: 'v-section',
  templateUrl: './v-section.component.html'
})
export class VZeroSectionComponent {
  @Input() label: string;
  @Input() value: string = null;
  @Input() type = "text";
  @Input() assetType = "pdf";
  @Input() inline = "false";

  getUrl(): string {
    if (this.value.startsWith('http://') || this.value.startsWith('https://')) {
      return this.value;
    }
    return 'http://' + this.value;
  }
}
