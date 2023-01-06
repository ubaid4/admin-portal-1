import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    MainComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
