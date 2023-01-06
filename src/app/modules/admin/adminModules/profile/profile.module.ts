import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
