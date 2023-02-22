import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  selected:any='';  
  constructor(private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.selected = (params.get('id'))?.toString();
      console.log(this.selected)
    })
  }

}
