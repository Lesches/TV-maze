import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';

import { Component} from '@angular/core';
import {ShowService} from '../../services/show.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  seasons: any;

  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {
    this.showService.getSeasons(
      this.route.snapshot.paramMap.get('id')
    ).subscribe(result => this.seasons = result);
  }

  ngOnInit() {
  }

}
