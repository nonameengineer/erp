import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPositionRoutingModule } from './edit-position-routing.module';
import { EditPositionComponent } from './edit-position.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [EditPositionComponent],
  imports: [
    CommonModule,
    EditPositionRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [EditPositionComponent]
})
export class EditPositionModule { }
