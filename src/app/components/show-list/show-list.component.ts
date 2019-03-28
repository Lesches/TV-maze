import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Show} from '../../models/Show';
import {ShowService} from '../../services/show.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
@Input() show: Show;
@Output() deleteShow: EventEmitter<Show> = new EventEmitter();
  constructor(private showService: ShowService) { }

  ngOnInit() {
  }


  // set dynamic classes
setClasses() {
   let classes = {
     show: true,
     'is-complete': this.show.completed
   }

   return classes;
}

onToggle(show) {
    show.completed = !show.completed;
  this.showService.toggleCompleted(show).subscribe(show => console.log(show));
}

  onDelete(show) {

    // toggle in UI
    this.deleteShow.emit(show);

    // toggle on server

  }
}
