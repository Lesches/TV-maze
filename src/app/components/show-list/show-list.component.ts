import { Component, OnInit} from '@angular/core';
import {ShowService} from '../../services/show.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

// Creates an array 'shows' with all the shows selected by the user
export class ShowListComponent implements OnInit {
  shows: any;

  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {

    this.showService.getShows(
      this.route.snapshot.paramMap.get('query')
    ).subscribe(result => this.shows = result);

  }


  ngOnInit() {
  }
}
