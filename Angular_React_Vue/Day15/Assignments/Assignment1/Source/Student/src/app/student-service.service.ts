import { Injectable } from '@angular/core';
import { LogServiceService } from './log-service.service';

interface student {
  name: string,
  RollNo: number,
  Fees: number,
  Grade: string
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  students: student[] = [
    {
      name: 'Nidit',
      RollNo: 1,
      Fees: 20000,
      Grade: 'A'
    },
    {
      name: 'Hemal',
      RollNo: 2,
      Fees: 20000,
      Grade: 'A'
    },
    {
      name: 'Vidhi',
      RollNo: 3,
      Fees: 20000,
      Grade: 'A'
    },
    {
      name: 'Vikas',
      RollNo: 4,
      Fees: 20000,
      Grade: 'A'
    },
    {
      name: 'Ruchit',
      RollNo: 5,
      Fees: 20000,
      Grade: 'A'
    }
  ]
  constructor(private Logservice: LogServiceService) {

  }

  GetStudents(): Array<any> {
    this.Logservice.log('Fechted All Students');
    return this.students;
  }

  createStudent(student: any): void {
    let Index: any = this.students.findIndex(item => item.RollNo == student.RollNo);
    if (Index >= 0) {
      this.Logservice.log('Student With This Roll Already Available');
    } else {
      this.Logservice.log('Student Created SuccessFully');
      this.students.push(student);
    }
  }

  deleteStudent(id: number): void {
    let Index: any = this.students.findIndex(item => item.RollNo == id);
    if (Index >= 0) {
      this.Logservice.log('Student deleted SuccessFully');
      this.students.splice(Index, 1)
    } else {
      this.Logservice.log('No data available with this RollNo')
    }
  }
  UpdateStudent(student: any): void {
    let Index: any = this.students.findIndex(item => item.RollNo == student.RollNo);
    if( Index >=0){
      this.Logservice.log('Student Upadted SuccessFuly')
      this.students.splice(Index, 1, student)
    }else{
      this.Logservice.log('Please Enter Valid Roll No For Upadte Student ')
    }
  }
}
