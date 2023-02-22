import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import {ExperienceComponent} from './experience/experience.component'
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [{path:'about',component:AboutComponent}
,{path:'experience',component:ExperienceComponent},
{path:'education',component:EducationComponent},
{path:'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }