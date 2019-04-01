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
// this.showService.
// });
  }

  addShows(show: Show){
    this.showService.addShows(show).subscribe(show => {
      this.shows.push(show);
    });
  }
}
