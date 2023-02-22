import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ListingComponent } from './listing/listing.component';
import { SearchingComponent } from './searching/searching.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'List',
    component: ListingComponent
  },
  {
    path: 'search/:keywords',
    component: SearchingComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
