import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateFn } from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  ProfileForm = new FormGroup({
    Name: new FormGroup({
      Fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Lname: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    Gender: new FormControl(''),
    Address: new FormGroup({
      CurrAddress: new FormControl('', [Validators.required]),
      ParmenentAddress: new FormControl('')
    })
  });
  UpdateForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required])
  })
 submitdata(){
  console.log(this.ProfileForm.value);
 }
 UpdateData(){
  this.ProfileForm.patchValue({
    Name:{
      Fname:this.UpdateForm.controls.Name.value,
    },
    Address:{
      CurrAddress:this.UpdateForm.controls.Address.value
    }
  })
  console.log(this.ProfileForm.value)
 }
}