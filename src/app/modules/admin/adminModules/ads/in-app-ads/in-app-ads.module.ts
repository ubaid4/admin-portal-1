import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppAdsRoutingModule } from './in-app-ads-routing.module';
import { MainComponent } from './main/main.component';
import { AddsListComponent } from './adds-list/adds-list.component';
import { AdsCardComponent } from './ads-card/ads-card.component';


@NgModule({
  declarations: [
    MainComponent,
    AddsListComponent,
    AdsCardComponent
  ],
  imports: [
    CommonModule,
    InAppAdsRoutingModule
  ]
})
export class InAppAdsModule { }
