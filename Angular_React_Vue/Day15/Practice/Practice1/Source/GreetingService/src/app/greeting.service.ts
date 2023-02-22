import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }
  greet(name:string):any{
    if(name!==''){
      return `Hello ${name.toUpperCase()} , Good to see you.`;
    }
  }
}
