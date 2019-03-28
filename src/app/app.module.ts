import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddShowsComponent } from './add-shows/add-shows.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowListComponent,
    AddShowsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
