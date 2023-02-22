import { Injectable } from '@angular/core';

interface user{
  username:string,
  // password:string,
  roll:string
}
interface product{
  id:number,
  name:string,
  price:number,
  img:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users:user[]=[
    {
      username:'nidit',
      // password:'nidit123',
      roll:'admin'
    },
    {
      username:'hemal',
      // password:'hemal123',
      roll:'user'
    }
  ];
  Products:product[]=[
    {
      id:1,
      name:'Backpack',
      price:109.95,
      img:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    },
    {
      id:2,
      name:'Premium Slim Fit T-Shirt',
      price:22.3,
      img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
      id:3,
      name:'Mens Cotton Jacket',
      price:55.99,
      img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    },  
    {
      id:4,
      name:"Women's Short Sleeve Moisture",
      price:7.95,
      img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    },
    {
      id:5,
      name:'DANVOUY Womens T Shirt',
      price:12.99,
      img:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    }
  ]
  constructor() { }

  gettoken(){
    return localStorage.getItem('user');
  }

  addProduct(item:any){
    if(item.name == undefined){
      console.log('name is required');
    }else{
      this.Products.push(item);
      console.log('added successfully');
    }

  }
  deleteProduct(id:number){
    const index = this.Products.findIndex(item => item.id === id);
    if(index >=0){
      this.Products.splice(index,1);
      console.log('Deleted successfully');
    }else{
      console.log('item does not exists')
    }
  }
}
