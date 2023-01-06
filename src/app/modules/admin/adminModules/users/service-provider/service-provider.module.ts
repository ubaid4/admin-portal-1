import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    MainComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule
  ]
})
export class ServiceProviderModule { }
