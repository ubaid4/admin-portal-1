import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'new',component:AddEditComponent},
  {path:'edit/:userId',component:AddEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationUserRoutingModule { }
