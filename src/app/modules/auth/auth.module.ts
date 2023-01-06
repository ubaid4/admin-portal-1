import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
     SharedModule
  ]
})
export class AuthModule { }
