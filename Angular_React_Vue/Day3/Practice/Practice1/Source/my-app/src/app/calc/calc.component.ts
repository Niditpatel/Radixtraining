import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  num1: string = '';
  num2: string = '';
  ans: string = '';
  operator: string = '';
  constructor() { }
  handlechange(){
    return this.operator = ''
  }
  operation(value: string) {
    if (this.num1 === '' || this.num2 === '') {
      return alert("give numbers first");
    } else {
      if (value === '+') {
        this.ans = (parseFloat(this.num1)+ parseFloat(this.num2)).toFixed(2).toString()
        return this.ans, this.operator = value;
      } else if (value === '-') {
        this.ans = (parseFloat(this.num1)- parseFloat(this.num2)).toFixed(2).toString()
        return this.ans, this.operator = value;
      } else if (value === '*') {
        this.ans = (parseFloat(this.num1) * parseFloat(this.num2)).toFixed(2).toString()
        return this.ans, this.operator = value;
      }
      else if (value === '/') {
        this.ans = (parseFloat(this.num1)/ parseFloat(this.num2)).toFixed(4).toString()
        return this.ans, this.operator = value;
      }
      else {
        alert ("please select valid operation");
      }
    }
  }
  ngOnInit(): void {
  }

}
