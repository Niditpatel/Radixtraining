import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-evennumber',
  templateUrl: './evennumber.component.html',
  styleUrls: ['./evennumber.component.css']
})
export class EvennumberComponent implements OnInit {
  @Input() List!:Array<number>
  constructor() { }

  ngOnInit(): void {
  }

}
