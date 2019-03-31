import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../services/show.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  shows: any;

  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {
    this.showService.getShows(
      this.route.snapshot.paramMap.get('query')
    ).subscribe(result => this.shows = result);
  }

  ngOnInit() {
  }

}
