import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import {DropdownModule} from '../dropdown/dropdown.module';
import {ItemModule} from '../item/item.module';



@NgModule({
  declarations: [SectionComponent],
  exports: [
    SectionComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ItemModule,
  ],
})
export class SectionModule { }
