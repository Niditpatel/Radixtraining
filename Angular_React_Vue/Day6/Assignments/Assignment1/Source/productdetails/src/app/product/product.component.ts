import { Component, OnInit } from '@angular/core';
import Product from './productInterface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductName:string='';
  Price:string='';
  Qty:string='';
  Products:Product[]=[];
  constructor() { }
  AddProduct(){
    this.Products.push({
      Name:this.ProductName,
      Price:parseFloat(this.Price),
      Qty:parseInt(this.Qty),
      Gross:(parseFloat(this.Price)*parseInt(this.Qty)),
      Discount:((parseFloat(this.Price)*parseInt(this.Qty))*0.05).toFixed(2),
      PayableAmount:((parseFloat(this.Price)*parseInt(this.Qty))-((parseFloat(this.Price)*parseInt(this.Qty))*0.05)).toFixed(2)})
  }
  ngOnInit(): void {
  }

}
