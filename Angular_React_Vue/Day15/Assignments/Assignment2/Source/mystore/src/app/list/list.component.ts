import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: Array<any> = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.productList = this.auth.Products;
  }

}
