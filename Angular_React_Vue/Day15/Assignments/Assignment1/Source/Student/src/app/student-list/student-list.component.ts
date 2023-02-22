import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  list:Array<any>=[];
  constructor(private studentservice: StudentServiceService) { }

  ngOnInit(): void {
    this.list = this.studentservice.students;
  }
}
