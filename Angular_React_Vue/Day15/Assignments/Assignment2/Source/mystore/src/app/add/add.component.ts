import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name:any;
  img:any;
  price:any;
  id:any;
  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }
  addproduct(){
    this.auth.addProduct({id:this.id,name:this.name,price:this.price,img:this.img})
  }
}
