import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './components/shows/shows.component';
import {ShowListComponent} from './components/show-list/show-list.component';
import {DetailsComponent} from './components/details/details.component';
import {SeasonsComponent} from './components/seasons/seasons.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: 'shows/:query', component: ShowListComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'seasons/:id', component: SeasonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
