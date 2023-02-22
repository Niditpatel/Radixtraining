import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/Models/Post';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  keywords: any;
  flag: boolean = false;
  searchlist: Array<Post> = [];
  constructor(private activatedroute: ActivatedRoute, private curdservice: CurdService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.keywords = params.get('keywords');
      console.log(this.keywords)
      console.log(this.searchlist);

    })
    if (this.keywords === '') {
      this.flag = true;
    }
    else {
      this.flag = false
      this.curdservice.Getusers().subscribe((posts: Array<Post>) =>
        this.searchlist = posts.filter(item => new RegExp(this.keywords, 'i').test(item.title) === true));
    }
  }

}
