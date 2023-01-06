import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { MainComponent } from './main/main.component';

import { AddEditComponent } from './add-edit/add-edit.component';
import { AssignComponent } from './assign/assign.component';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
 
    AddEditComponent,
      AssignComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
