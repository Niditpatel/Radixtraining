import { Component } from '@angular/core';
import { Post } from '../Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:Boolean=false;
  LikedPostList : Array<Post>=[];
  likedpost(arr:Array<Post>)
  {
    this.LikedPostList=arr;
  }
  showCart(){
    if(this.show == true){
      this.show =false;
    }else{
      this.show=true;
    };
  }
}
