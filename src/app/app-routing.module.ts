import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './components/shows/shows.component';
import {ShowListComponent} from './components/show-list/show-list.component';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: 'shows/:query', component: ShowListComponent},
  {path: 'shows/:query', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
