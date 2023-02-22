import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent,children:[
    {path:'list',component:ListComponent,data:{state:'list'}},
    {path:'add',component:AddComponent,canActivate:[AuthGuard],data:{state:'add'}},
    {path:'delete',component:DeleteComponent,canActivate:[AuthGuard],data:{state:'delete'}},
    {path:'**',redirectTo:'list',pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
