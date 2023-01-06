import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationUserRoutingModule } from './operation-user-routing.module';
import { MainComponent } from './main/main.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [
    MainComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    OperationUserRoutingModule,
    SharedModule,
    
  ]
})
export class OperationUserModule { }
