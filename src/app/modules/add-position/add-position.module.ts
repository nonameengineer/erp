import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPositionRoutingModule } from './add-position-routing.module';
import { AddPositionComponent } from './add-position.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddPositionComponent],
  imports: [
    CommonModule,
    AddPositionRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [AddPositionComponent]
})
export class AddPositionModule { }
