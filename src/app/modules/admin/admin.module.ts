import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    
  ]
})
export class AdminModule { }
