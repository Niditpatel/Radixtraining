import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {
  AtlanticMenu: any[] = [
    { id: 1, item: 'Kosher Meal' },
    { id: 2, item: 'Moslem Meal' },
    { id: 3, item: 'Vegetarian Meal' },
    { id: 4, item: 'Asian Meal' }
  ];
  PacificMenu: any[] = [
    {id:1, item: 'SeaFood Meal'},
    {id:2, item: 'Lacto Ovo Veg Meal'},
    {id:3, item: 'Bland Meal'},
    {id:4, item: 'Fruit Meal'}
  ];

  constructor(private router: ActivatedRoute,
    private route: Router) { }

    atalnticmenu(id:number){
      this.route.navigate(['atlantic',id],{relativeTo:this.router})
    }
    pecificmenu(id:number){
      this.route.navigate(['pecific',id],{relativeTo:this.router})
    }
  ngOnInit(): void {
  }
  visAtlantic() {
    this.route.navigate(['atlantic'], { relativeTo: this.router });
  }
  Viapecific() {
    this.route.navigate(['pecific'], { relativeTo: this.router })
  }
}
