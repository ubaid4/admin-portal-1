import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared/shared.module';




@NgModule({
  declarations: [
    MainComponent,
    SidePanelComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
   SharedModule
  ],
  exports:[
    MainComponent
  ]
})
export class LayoutModule { }
