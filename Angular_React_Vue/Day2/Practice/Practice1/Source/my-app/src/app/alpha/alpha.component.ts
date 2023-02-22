import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
   arr:Array<string>=[];
  constructor() { 
    for(var i = 65; i<= 90 ;i++){
      this.arr.push(String.fromCharCode(i));
    }
  }

  ngOnInit(): void {
  }

}
