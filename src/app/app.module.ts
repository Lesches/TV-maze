import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { DetailsComponent } from './components/details/details.component';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SeasonsComponent } from './seasons/seasons.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowListComponent,
    AddShowsComponent,
    HeaderComponent,
    DetailsComponent,
    SeasonsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
