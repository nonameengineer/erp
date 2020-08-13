import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSectionRoutingModule } from './edit-section-routing.module';
import { EditSectionComponent } from './edit-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from '../../components/color-picker/color-picker.module';


@NgModule({
  declarations: [EditSectionComponent],
  imports: [
    CommonModule,
    EditSectionRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
  exports: [EditSectionComponent]
})
export class EditSectionModule { }
