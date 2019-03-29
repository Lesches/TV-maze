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
/*@Input() show: Show;
@Output() deleteShow: EventEmitter<Show> = new EventEmitter();*/


  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {
this.showService.getShows(
  this.route.snapshot.paramMap.get('query')
  ).subscribe(result => this.shows = result);

}


  ngOnInit() {
  }


  /* set dynamic classes
setClasses() {
   let classes = {
     show: true,
     'is-complete': this.show.completed
   }

   return classes;


onToggle(show) {
    show.completed = !show.completed;
  this.showService.toggleCompleted(show).subscribe(show => console.log(show));
}

  onDelete(show) {

    // toggle in UI
    this.deleteShow.emit(show);

    // toggle on server

  }*/
}
