import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { MainComponent } from './main/main.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    AddUpdateComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
