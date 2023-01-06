import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'new',component:AddUpdateComponent},
  {path:'edit/:categoryId',component:AddUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
