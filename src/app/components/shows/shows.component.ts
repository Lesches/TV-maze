import { Component, OnInit } from '@angular/core';

import {ShowService} from '../../services/show.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {

  }


}
