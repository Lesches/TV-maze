import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './components/shows/shows.component';
import {ShowListComponent} from './components/show-list/show-list.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: 'shows/:query', component: ShowListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
