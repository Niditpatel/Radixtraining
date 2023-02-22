import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any[]=[{"userID":1,"userName":"Roy"},{"userID":2,userName:"Rohit"}]
  constructor() { }

  ngOnInit(): void {
  }

}
