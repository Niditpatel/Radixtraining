import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userName:string='';
  Gender:string='';
  designation:string='';
  PanNumber:string='';
  userDetails: any[] = [
    { userID: 1, userName: "Roy", Gender: "Male", designation: "Developer", PanNumber: "335454" },
    { userID: 2, userName: "Rohit", Gender: "Male", designation: "Junior Developer", PanNumber: "abcd" }
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      var id:any = params.get('id');
      let data :any = this.userDetails.find(u =>{ return u.userID == id});
      this.userName = data.userName;
      this.Gender =data.Gender;
      this.designation = data.designation;
      this.PanNumber = data.PanNumber
    })
  }

}
