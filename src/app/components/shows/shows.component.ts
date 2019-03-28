import { Component, OnInit } from '@angular/core';
import {Show} from '../../models/Show';
import {ShowService} from '../../services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
shows: Show[];
  constructor(private showService: ShowService) { }

  ngOnInit() {
this.showService.getShows().subscribe(shows => {
this.shows = shows;
});
  }
// remove from UI
  deleteShow(show: Show){
    this.shows = this.shows.filter(t => t.id !== show.id);

    // remove from server
    this.showService.deleteShow(show).subscribe();
  }

  addShows(show: Show){
    this.showService.addShows(show).subscribe(show => {
      this.shows.push(show);
    });
  }
}
