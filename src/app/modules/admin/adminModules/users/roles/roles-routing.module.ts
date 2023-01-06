import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AssignComponent } from './assign/assign.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'new',component:AddEditComponent},
  {path:'edit/:roleId',component:AddEditComponent},
  {path:'assign',component:AssignComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
