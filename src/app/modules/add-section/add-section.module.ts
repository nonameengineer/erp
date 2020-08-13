import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSectionRoutingModule } from './add-section-routing.module';
import { AddSectionComponent } from './add-section.component';
import {ColorPickerModule} from '../../components/color-picker/color-picker.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddSectionComponent],
  imports: [
    CommonModule,
    AddSectionRoutingModule,
    ColorPickerModule,
    ReactiveFormsModule,
  ],
  exports: [AddSectionComponent]
})
export class AddSectionModule { }
