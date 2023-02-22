import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  list:Array<any>=[];
  Name:string='';
  Fees:string='';
  RollNo:string='';
  Grade:string='';
  constructor(private studentservice:StudentServiceService) { }

  ngOnInit(): void {
  }
  getAllstudents(){
    this.list = this.studentservice.GetStudents();
  }
  CreateStudent(){
    this.studentservice.createStudent(
      {name:this.Name,RollNo:this.RollNo,Fees:this.Fees,Grade:this.Grade}
      );
  }
  DeleteStudent(){
    this.studentservice.deleteStudent(parseInt(this.RollNo));
  }
  UpdateStudent(){
    this.studentservice.UpdateStudent({name:this.Name,RollNo:this.RollNo,Fees:this.Fees,Grade:this.Grade})
  }
}
