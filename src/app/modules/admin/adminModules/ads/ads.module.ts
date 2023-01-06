import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    MainComponent,
   
 
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }
