import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() UName!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
