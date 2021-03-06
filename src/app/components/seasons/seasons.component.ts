import {Component, Input, OnInit} from '@angular/core';
import {ShowService} from '../../services/show.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  episodes: any;
  @Input() id: string;
  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {
// Receives the selected season's id

    this.showService.getEpisodes(

      this.route.snapshot.paramMap.get('id')
    ).subscribe(result => this.episodes = result);

  }

  ngOnInit() {
  }

}
