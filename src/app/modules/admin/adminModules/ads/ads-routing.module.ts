import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
{path:'',redirectTo:'in-app-ads'},
    { path: 'in-app-ads', loadChildren: () => import('./in-app-ads/in-app-ads.module').then(m => m.InAppAdsModule) },
    { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
