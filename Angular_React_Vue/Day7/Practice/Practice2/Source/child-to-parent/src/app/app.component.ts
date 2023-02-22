import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name:string=''
  title = 'child-to-parent';
  show(value:string){
    this.Name = value;
  }
}
