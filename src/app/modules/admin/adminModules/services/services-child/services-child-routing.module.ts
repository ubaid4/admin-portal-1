import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { MainComponent } from './main/main.component';
import { RequistComponent } from './requist/requist.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'new',component:AddUpdateComponent},
  {path:'edit/:serviceId',component:AddUpdateComponent},
  {path:'requests',component:RequistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesChildRoutingModule { }
