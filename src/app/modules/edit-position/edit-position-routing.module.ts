import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPositionComponent} from './edit-position.component';

const routes: Routes = [
  {
    path: ':name',
    component: EditPositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPositionRoutingModule { }
