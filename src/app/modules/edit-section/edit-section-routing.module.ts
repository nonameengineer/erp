import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditSectionComponent} from './edit-section.component';

const routes: Routes = [
  {
    path: ':name',
    component: EditSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSectionRoutingModule { }
