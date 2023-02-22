import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurdService]
})
export class AppComponent {
  title = 'Curd';
  keywords: string ='';
  constructor(private curdservice: CurdService, private router: Router) { }

}
