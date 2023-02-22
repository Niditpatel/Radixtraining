import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greate-number',
  templateUrl: './greate-number.component.html',
  styleUrls: ['./greate-number.component.css']
})
export class GreateNumberComponent implements OnInit {
  num1:number =0;
  num2: number = 0;

  constructor() {
  
   }
  
  ngOnInit(): void {
  }

}
