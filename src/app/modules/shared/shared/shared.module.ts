import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DarbakPasswordDirective } from './directives/darbak-password.directive';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [
    DarbakPasswordDirective
  ],
  imports: [
    CommonModule,
    RouterModule,  
    FormsModule,
    AngularMultiSelectModule
  
  ],
  exports: [
    RouterModule,
     DarbakPasswordDirective,
     FormsModule,
     AngularMultiSelectModule
  ]
})
export class SharedModule { }
