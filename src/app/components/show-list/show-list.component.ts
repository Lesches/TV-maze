import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Show} from '../../models/Show';
import {ShowService} from '../../services/show.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
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
