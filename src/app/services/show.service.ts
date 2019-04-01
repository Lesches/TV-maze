import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from  '@angular/common/http';
import {Show} from '../models/show';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  showUrl: any = 'http://api.tvmaze.com/search/shows?q=';
  // todosLimit = '?_limit=5';
  constructor(private http: HttpClient) { }

  // get shows
  getShows(t) {

    return this.http.get('http://api.tvmaze.com/search/shows?q=' + t);
  }
// get summary
  getSummary(t) {

    return this.http.get('http://api.tvmaze.com/search/shows?q=' + t);
  }
  // get seasons
  getSeasons(t) {

    return this.http.get('http://api.tvmaze.com/shows/' + t + '/seasons');
  }

  // get episodes
  getEpisodes(t) {

    return this.http.get('http://api.tvmaze.com/seasons/' + t + '/episodes');
  }
}
