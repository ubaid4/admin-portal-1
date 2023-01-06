import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreActivitiesRoutingModule } from './core-activities-routing.module';
import { MainComponent } from './main/main.component';
import { AddUpdateComponent } from './add-update/add-update.component';


@NgModule({
  declarations: [
    MainComponent,
    AddUpdateComponent
  ],
  imports: [
    CommonModule,
    CoreActivitiesRoutingModule
  ]
})
export class CoreActivitiesModule { }
