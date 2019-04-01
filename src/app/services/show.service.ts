import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from  '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ShowService {


  constructor(private http: HttpClient) { }

  // get shows
  getShows(t) {
// returns all the shows n=by the search term
    return this.http.get('http://api.tvmaze.com/search/shows?q=' + t);
  }

  // get seasons
  getSeasons(t) {
    // displays the shows by season

    return this.http.get('http://api.tvmaze.com/shows/' + t + '/seasons');
  }

  // get episodes
  getEpisodes(t) {
// displays each season by episode
    return this.http.get('http://api.tvmaze.com/seasons/' + t + '/episodes');
  }
}
