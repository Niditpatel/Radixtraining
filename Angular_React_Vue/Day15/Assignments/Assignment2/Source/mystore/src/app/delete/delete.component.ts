import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  deleteproduct(){
    if(this.id != undefined){
      this.auth.deleteProduct(parseInt(this.id))
    }
  }
}
