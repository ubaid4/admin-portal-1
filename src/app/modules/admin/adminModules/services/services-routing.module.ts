import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',redirectTo:'categories'},
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'core-activities', loadChildren: () => import('./core-activities/core-activities.module').then(m => m.CoreActivitiesModule) },
  { path: 'services', loadChildren: () => import('./services-child/services-child.module').then(m => m.ServicesChildModule) },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
