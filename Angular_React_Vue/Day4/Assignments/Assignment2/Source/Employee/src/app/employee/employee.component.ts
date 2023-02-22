import { Component, OnInit } from '@angular/core';
import {Employee,Hobbies} from './EmployeeIterface'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

 
export class EmployeeComponent implements OnInit {
  eid: string = '';
  EName: string = '';
  Address: string = '';
  Gender: string = '';
  DOJ: string = '';
  Emps: Employee[] = [];

  FMonth: string = '';
  Fname: string = '';
  filteredbyMongth: Employee[] = [];
  filterbyname:Employee[] = [];
  hobbies:Hobbies[]= [{
      name:'Swmming',
      checked: false
    },
    {
      name:'Reading',
      checked: false
    },
    {
      name:'Travelling',
      checked: false
    },
    {
      name:'Playing',
      checked: false
    },
    {
      name:'Other',
      checked: false
    },
  ];
  selected :string[] = [];
  constructor() { }
  SaveEmp() {
    this.selected=[];
    this.hobbies.filter((value) => {
      if(value.checked === true){
        this.selected.push(value.name)
      }
      return value;
    });
    this.Emps.push({ ID: this.eid, Name: this.EName, Address: this.Address, Gender: this.Gender, DOJ: this.DOJ, Hobbies: this.selected.join(',') });
  }
  getBymonth() {
    this.filteredbyMongth = this.Emps.filter(value => value.DOJ.split('-')[1] == this.FMonth)
  }
  getByName() {
    this.filterbyname = this.Emps.filter(value => value.Name == this.Fname);
  }
  ngOnInit(): void {
  }
}
