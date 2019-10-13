import { Component, EventEmitter, OnInit, Input, Output, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';

@Component({
  selector: 'v-uploader',
  templateUrl: './v-uploader.component.html'
})
export class VZeroUploaderComponent extends AppComponentBase implements OnInit {

  @Input() label = null;
  @Input() uploadedFile = '';
  @Input() fileType = 'application/pdf';
  @Input() isRequired = 'false';
  @Input() showLink = 'true';
  @Input() cssClass = 'drag-drop-uploader';

  @Output() fileUploaded = new EventEmitter<string>();

  uploadApiUrl: string;
  spinnerVisibility: boolean = false;

  constructor(injector: Injector) {
    super(injector);
    this.uploadApiUrl = AppConsts.apiBaseUrl + '/api/upload';
  }

  ngOnInit() {
  }

  onUploadFile(event) {
    for (const file of event.files) {

      const fileUrl = JSON.parse(event.xhr.response).result;
      this.uploadedFile = fileUrl;
    }

    this.spinnerVisibility = false;
    this.fileUploaded.emit(this.uploadedFile);

  }

  showSpinner() {
    this.spinnerVisibility = true;
  }
  hideSpinner() {
    this.spinnerVisibility = false;
  }
}
