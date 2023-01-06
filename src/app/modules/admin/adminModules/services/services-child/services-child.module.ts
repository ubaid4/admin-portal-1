import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesChildRoutingModule } from './services-child-routing.module';
import { MainComponent } from './main/main.component';

import { AddUpdateComponent } from './add-update/add-update.component';
import { RequistComponent } from './requist/requist.component';


@NgModule({
  declarations: [
    MainComponent,

    AddUpdateComponent,
     RequistComponent
  ],
  imports: [
    CommonModule,
    ServicesChildRoutingModule
  ]
})
export class ServicesChildModule { }
