import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
   Name = "Nidit";
  constructor() { }
  ngOnInit(): void {
  }

}
