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
showUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private http: HttpClient) { }

  // get shows
  getShows(): Observable<Show[]> {
   return this.http.get<Show[]>(`${this.showUrl}${this.todosLimit}`);
  }

  // delete show

  deleteShow(show:Show): Observable<Show>{
    const url = `${this.showUrl}/{$show.id}`;
    return this.http.delete<Show>(url, httpOptions);
  }
  // toggle completed
  toggleCompleted(show: Show): Observable<any>{
    const url = `${this.showUrl}/{$show.id}`;
    return this.http.put(url, show, httpOptions);
  }

}
