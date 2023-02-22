import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/Models/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Output() postLiked = new EventEmitter();
  PostList: Post[] = [
    {
      PostName: 'Backpack',
      PostDescription: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      PostedDate: new Date('12-10-2022'),
      PostedImage: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    },
    {
      PostName: 'T-Shirt',
      PostDescription: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket,  soft fabric for breathable and comfortable wearing',
      PostedDate: new Date('10-25-2022'),
      PostedImage: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
      PostName: 'Jacket',
      PostDescription: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working , traveling or other',
      PostedDate: new Date('12-08-2022'),
      PostedImage: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    },
    {
      PostName: 'Bracelet',
      PostDescription: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl",
      PostedDate: new Date('09-15-2022'),
      PostedImage: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    },
    {
      PostName: 'Internal SSD',
      PostDescription: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5',
      PostedDate: new Date('11-03-2022'),
      PostedImage: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
    },
    {
      PostName: 'T-Shirt',
      PostDescription: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch',
      PostedDate: new Date('01-01-2022'),
      PostedImage: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    }

  ]

  constructor() {

  }

  ngOnInit(): void {

  }
  LikedList: Array<Post> = [];
  
  LikePost(item: Post, input: HTMLElement) {
    const Index = this.LikedList.indexOf(item);
    console.log(Index !== -1);
    if (Index !== -1) {
      input.classList.add('text-gray-200')
      input.classList.remove('text-pink-600')
      this.LikedList.splice(Index,1);
    }else{
      input.classList.remove('text-gray-200')
      input.classList.add('text-pink-600')
  
      this.LikedList.push(item)
      this.postLiked.emit(this.LikedList)
    }   
  }
}
