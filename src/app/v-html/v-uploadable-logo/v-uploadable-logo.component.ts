import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'v-uploadable-logo',
  templateUrl: './v-uploadable-logo.component.html'
})
export class VZeroUploadableLogoComponent implements OnInit {

  @Input() src: string;

  @Input() imgClass: string = 'v-uploaded-logo';
  @Input() width: string = '100%' ;

  @Input() defaultSrc: string = '/assets/images/img1.jpg';
  @Input() uploadEnabled: string = 'true';

  @Output() newImageUploaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getSrc(): string {
    return this.src ? this.src : this.defaultSrc;
  }

  imageUploaded(name) {
    this.newImageUploaded.emit(name);
  }

  reset() {
    this.newImageUploaded.emit('');
  }
}
