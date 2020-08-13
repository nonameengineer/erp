import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {SectionModule} from '../../components/section/section.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SectionModule,
    DragDropModule,
  ],
  providers: [

  ],
})
export class ListModule {}
