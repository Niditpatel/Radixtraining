import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { MealComponent } from './meal/meal.component';
import { PecificComponent } from './pecific/pecific.component';

const routes: Routes = [
  {path:'',redirectTo:'india-usa',pathMatch:'full'},
  {path:'india-usa',component:IndiaUsaComponent,children:[
    {path:'atlantic',component:AtlanticComponent},
    {path:'pecific',component:PecificComponent},
    {path:'atlantic/:id',component:MealComponent},
    {path:'pecific/:id',component:MealComponent                                                                                                                         }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
