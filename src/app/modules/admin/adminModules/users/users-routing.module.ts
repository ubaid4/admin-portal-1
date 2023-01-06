import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',redirectTo:'service-providers'},
    { path: 'service-providers', loadChildren: () => import('./service-provider/service-provider.module').then(m => m.ServiceProviderModule) },
    { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
    { path: 'operation-users', loadChildren: () => import('./operation-user/operation-user.module').then(m => m.OperationUserModule) },
    { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
