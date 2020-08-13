import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import {DropdownModule} from '../dropdown/dropdown.module';



@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    DropdownModule,
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
