import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-shows',
  templateUrl: './add-shows.component.html',
  styleUrls: ['./add-shows.component.css']
})
export class AddShowsComponent implements OnInit {
  @Output() addShows: EventEmitter<any> = new EventEmitter();
title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const title = this.title;

    this.addShows.emit(title);
  }

}
