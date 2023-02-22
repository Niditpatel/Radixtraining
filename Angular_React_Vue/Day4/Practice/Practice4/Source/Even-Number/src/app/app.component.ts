import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Even-Number';
  Evens:Array<number>=[];
  constructor(){
      for(let i = 0 ; i<=100;i++){
        if(i%2 ===  0) this.Evens.push(i);
      }
  }
}

