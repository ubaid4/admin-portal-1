import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    { path: 'dashboard', loadChildren: () => import('./adminModules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'services', loadChildren: () => import('./adminModules/services/services.module').then(m => m.ServicesModule) },

    { path: 'users', loadChildren: () => import('./adminModules/users/users.module').then(m => m.UsersModule) },
    { path: 'advertisement', loadChildren: () => import('./adminModules/ads/ads.module').then(m => m.AdsModule) },
    { path: 'edit-profile', loadChildren: () => import('./adminModules/profile/profile.module').then(m => m.ProfileModule) },

  ]}
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
