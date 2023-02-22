import { Component, OnInit } from '@angular/core';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id: any;
  userid: any;
  title: any;
  body: any;
  constructor(private curdservice: CurdService) { }

  ngOnInit(): void {
  }
  Post() {
    console.log('post adding ....')
    this.curdservice.postPost({ user_id: this.userid, title: this.title, body: this.body }).subscribe(data => console.log(data))
  }
}
