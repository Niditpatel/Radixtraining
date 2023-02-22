import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  constructor(private auth:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  Login(){
    const findUser = this.auth.users.find((item)=>(item.username == this.username && item.password == this.password));
    if(findUser){
     localStorage.setItem('user',findUser.roll);
     console.log(findUser)
     if(findUser.roll == 'user'){
      this.router.navigateByUrl('product/list')
     }else{
      this.router.navigateByUrl('/product')
     }
    }
   }
}
