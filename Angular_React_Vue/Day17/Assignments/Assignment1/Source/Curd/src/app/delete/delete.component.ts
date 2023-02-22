import { Component, OnInit } from '@angular/core';
import { CurdService } from '../curd.service';
import { Post } from 'src/Models/Post';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  postlist: Post[] = [];
  constructor(private curdservice: CurdService) { }

  ngOnInit(): void {
    this.curdservice.Getusers().subscribe((posts: Array<Post>) => (this.postlist = posts))
  }
  delete(id: number) {
    console.log("deleted  : ", id);
    this.curdservice.DeletePost(id).subscribe();
  }
}
