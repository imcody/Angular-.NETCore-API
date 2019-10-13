import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'ngx-ui-switch';
import {
    AutoCompleteModule,
    CalendarModule,
    ColorPickerModule,
    ConfirmationService,
    ConfirmDialogModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule,
    FileUploadModule,
    GrowlModule,
    SharedModule as PrimeShared,
    ToggleButtonModule,
    TooltipModule,
    RadioButtonModule,
    CheckboxModule
} from 'primeng/primeng';

import {
    VZeroAutocompleteComponent,
    VZeroCheckboxComponent,
    VZeroCheckboxListComponent,
    VZeroDatapickerComponent,
    VZeroInputComponent,
    VZeroPortletComponent,
    VZeroRadioComponent,
    VZeroRadioListComponent,
    VZeroSelectComponent,
    VZeroSwitchComponent,
    VZeroTextAreaComponent,
    VZeroToggleComponent,
    VZeroUploadableLogoComponent,
    VZeroUploaderComponent,
    VZeroUserAvatarComponent,
} from '.';
import { VZeroSectionComponent } from './v-section/v-section.component';
import { VHtmlComponent } from '@app/v-html/v-html.component';

import { VCardComponent } from '@app/v-html/v-card/v-card.component';
import { VModalComponent } from '@app/v-html/v-modal/v-modal.component';
// prime ng
@NgModule({
    declarations: [
        VZeroUserAvatarComponent,
        VZeroInputComponent,
        VZeroTextAreaComponent,
        VZeroSelectComponent,
        VZeroUploaderComponent,
        VZeroUploadableLogoComponent,
        VZeroPortletComponent,
        VZeroCheckboxComponent,
        VZeroCheckboxListComponent,
        VZeroRadioComponent,
        VZeroRadioListComponent,
        VZeroDatapickerComponent,
        VZeroAutocompleteComponent,
        VZeroToggleComponent,
        VZeroSectionComponent,
        VZeroSwitchComponent,
        VCardComponent,
        VModalComponent,
        VHtmlComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TooltipModule,
        ConfirmDialogModule,
        DialogModule,
        GrowlModule,
        DropdownModule,
        FileUploadModule,
        CalendarModule,
        AutoCompleteModule,
        InputSwitchModule,
        ToggleButtonModule,
        DataTableModule,
        PrimeShared,
        ColorPickerModule,
        UiSwitchModule,
        RadioButtonModule,
        CheckboxModule
    ],
    exports: [
        TooltipModule,
        ConfirmDialogModule,
        DialogModule,
        GrowlModule,
        InputSwitchModule,
        DropdownModule,
        CalendarModule,
        AutoCompleteModule,
        DataTableModule,
        PrimeShared,

        VZeroUserAvatarComponent,
        VZeroInputComponent,
        VZeroTextAreaComponent,
        VZeroSelectComponent,
        VZeroUploaderComponent,
        VZeroUploadableLogoComponent,
        VZeroPortletComponent,
        VZeroCheckboxComponent,
        VZeroCheckboxListComponent,
        VZeroRadioComponent,
        VZeroRadioListComponent,
        VZeroDatapickerComponent,
        VZeroAutocompleteComponent,
        VZeroToggleComponent,
        VZeroSectionComponent,
        ColorPickerModule,
        VZeroSwitchComponent,
        VHtmlComponent,
        VCardComponent,
        VModalComponent
    ],
    providers: [
        ConfirmationService
    ]
})
export class VZeroHtmlModule {
}
