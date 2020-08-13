import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddSectionComponent} from './add-section.component';

const routes: Routes = [
  {
    path: '',
    component: AddSectionComponent,
  },
  {
    path: ':name',
    component: AddSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSectionRoutingModule {}
