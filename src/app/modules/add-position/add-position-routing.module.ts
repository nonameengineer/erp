import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPositionComponent} from './add-position.component';

const routes: Routes = [
  {
    path: '',
    component: AddPositionComponent,
  },
  {
    path: ':name',
    component: AddPositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPositionRoutingModule {}
