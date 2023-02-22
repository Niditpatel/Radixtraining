import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() display = new EventEmitter<string>();
  constructor() { }
  displayname(name: string) {
    this.display.emit(name);
  }
  ngOnInit(): void {
  }

}