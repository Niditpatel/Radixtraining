import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/Post';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
   postlist:Post[]=[];
  constructor(private curdservice:CurdService) { }

  ngOnInit(): void {
    this.curdservice.Getusers().subscribe((posts:Array<Post>)=>(this.postlist = posts))
  }

}
