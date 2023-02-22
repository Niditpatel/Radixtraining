import { Component ,OnInit} from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GreetingService]
})
export class AppComponent implements OnInit{
  title = 'GreetingService';
  greet:string='';
  name:string='';
  constructor(private greetingservice : GreetingService){
  }
  GreetUser(){
    this.greet = this.greetingservice.greet(this.name);
  }
  ngOnInit():void{
  }
}
