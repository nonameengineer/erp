import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/list/list.module').then(mod => mod.ListModule),
      },
      {
        path: 'add-position',
        loadChildren: () => import('./modules/add-position/add-position.module').then(mod => mod.AddPositionModule),
      },
      {
        path: 'add-section',
        loadChildren: () => import('./modules/add-section/add-section.module').then(mod => mod.AddSectionModule),
      },
      {
        path: 'edit-position',
        loadChildren: () => import('./modules/edit-position/edit-position.module').then(mod => mod.EditPositionModule),
      },
      {
        path: 'edit-section',
        loadChildren: () => import('./modules/edit-section/edit-section.module').then(mod => mod.EditSectionModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false,
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
