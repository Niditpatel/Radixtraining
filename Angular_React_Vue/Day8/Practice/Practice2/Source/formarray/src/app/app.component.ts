import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formarray';
  ProfileForm:FormGroup;
  constructor(private fb:FormBuilder){
    // this.Hobby = this.fb.array([
    //   this.fb.control('cricket')
    // ])
    this.ProfileForm = this.fb.group({
      Name:this.fb.group({
        FirstName: this.fb.control('',[Validators.required,Validators.minLength(3)]),
        LastName:this.fb.control('',[Validators.required,Validators.minLength(3)])
      }),
      Address:this.fb.group({
        CurrAddress:this.fb.control('',[Validators.required]),
        ParmenentAddress:this.fb.control('')
      }),
      Gender:this.fb.control(''),
      // Hobbies:this.Hobby
    });
    this.addMoreHobbies();
  }
  addMoreHobbies(){

  }
  get gethobbies(){
    return this.ProfileForm?.get('Hobbies') as FormArray;
  }
}
