import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StudentAdmission';
  studentdata: any[] = [];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    console.log(this.EmergencyList.controls)
    console.log(this.StudentForm.controls.Emergency.controls.EmergencyContact.controls[0].controls.Relation)
  }
  EmergencyList = this.fb.array([
    this.fb.group({
      Relation: this.fb.control('', [Validators.required]),
      Number: this.fb.control('', [Validators.required])
    })
  ]);
  ReferenceList = this.fb.array([
    this.fb.group({
      Address: this.fb.control('', [Validators.required]),
      Number: this.fb.control('', [Validators.required])
    })
  ]);
  StudentForm = this.fb.group({
    Name: this.fb.group({
      FirstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      MiddleName: this.fb.control('', [Validators.required]),
      LastName: this.fb.control('', [Validators.required])
    }),
    BirthDetail: this.fb.group({
      DOB: this.fb.control('', [Validators.required]),
      PlaceOfBirth: this.fb.control('', [Validators.required])
    }),
    Languages: this.fb.group({
      FirstLanguage: this.fb.control('', [Validators.required]),
      SecondLanguage: this.fb.control('')
    }),
    Address: this.fb.group({
      City: this.fb.control('', [Validators.required]),
      State: this.fb.control('', [Validators.required]),
      Country: this.fb.control('', [Validators.required]),
      PIN: this.fb.control('', [Validators.required,Validators.pattern(/[0-9]{6}/),Validators.maxLength(6)])
    }),
    Father: this.fb.group({
      FullName: this.fb.group({
        FirstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        MiddleName: this.fb.control('', [Validators.required]),
        LastName: this.fb.control('', [Validators.required])
      }),
      Email: this.fb.control('', [Validators.required]),
      EducationQualification: this.fb.control('', [Validators.required]),
      Profession: this.fb.control('', [Validators.required]),
      Designation: this.fb.control('', [Validators.required]),
      Phone: this.fb.control('', [Validators.required])
    }),
    Mother: this.fb.group({
      FullName: this.fb.group({
        FirstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        MiddleName: this.fb.control('', [Validators.required]),
        LastName: this.fb.control('', [Validators.required])
      }),
      Email: this.fb.control('', [Validators.required]),
      EducationQualification: this.fb.control('', [Validators.required]),
      Profession: this.fb.control('', [Validators.required]),
      Designation: this.fb.control('', [Validators.required]),
      Phone: this.fb.control('', [Validators.required])
    }),

    Emergency: this.fb.group({
      EmergencyContact: this.EmergencyList
    }),
    Reference: this.fb.group({
      ReferenceContact: this.ReferenceList
    })
  })
  AddEmergency() {
    this.EmergencyList.push(
      this.fb.group({
        Relation: this.fb.control(''),
        Number: this.fb.control('')
      })
    )
  }
  DeleteEmergency(i: number) {
    this.EmergencyList.removeAt(i);
  }
  AddReference() {
    this.ReferenceList.push(
      this.fb.group({
        Address: this.fb.control(''),
        Number: this.fb.control('')
      })
    )
  }
  DeleteReference(i: number) {
    this.ReferenceList.removeAt(i);
  }

  submitdata(item: any) {
    this.studentdata.push(item);
    console.log(this.studentdata)
  }

  get Fname() {
    return this.StudentForm.controls.Name.controls.FirstName;
  }
  get Mname() {
    return this.StudentForm.controls.Name.controls.MiddleName;
  }
  get Lname() {
    return this.StudentForm.controls.Name.controls.LastName;
  }
  get dob() {
    return this.StudentForm.controls.BirthDetail.controls.DOB;
  }
  get placeofbirth() {
    return this.StudentForm.controls.BirthDetail.controls.PlaceOfBirth;
  }

  get Flang() {
    return this.StudentForm.controls.Languages.controls.FirstLanguage;
  }
  get Slang() {
    return this.StudentForm.controls.Languages.controls.SecondLanguage;
  }
  get Acity() {
    return this.StudentForm.controls.Address.controls.City;
  }

  get AState() {
    return this.StudentForm.controls.Address.controls.State;
  }

  get Acountry() {
    return this.StudentForm.controls.Address.controls.Country;
  }

  get Apin() {
    return this.StudentForm.controls.Address.controls.PIN
  }
  get Ffname(){
    return this.StudentForm.controls.Father.controls.FullName.controls.FirstName;
  }
  get Fmname(){
    return this.StudentForm.controls.Father.controls.FullName.controls.MiddleName;
  }
  get Flname(){
    return this.StudentForm.controls.Father.controls.FullName.controls.LastName;
  }
  get Fedqul(){
    return this.StudentForm.controls.Father.controls.EducationQualification;
  }
  get Fprofession(){
    return this.StudentForm.controls.Father.controls.Profession;
  }
  get FDesignation(){
    return this.StudentForm.controls.Father.controls.Designation;
  }
  get Fphone(){
    return this.StudentForm.controls.Father.controls.Phone;
  }
  get  Femail(){
    return this.StudentForm.controls.Father.controls.Email;
  }
   get Mfname(){
    return this.StudentForm.controls.Mother.controls.FullName.controls.FirstName;
  }
  get Mmname(){
    return this.StudentForm.controls.Mother.controls.FullName.controls.MiddleName;
  }
  get Mlname(){
    return this.StudentForm.controls.Mother.controls.FullName.controls.LastName;
  }
  get Medqul(){
    return this.StudentForm.controls.Mother.controls.EducationQualification;
  }
  get Mprofession(){
    return this.StudentForm.controls.Mother.controls.Profession;
  }
  get MDesignation(){
    return this.StudentForm.controls.Mother.controls.Designation;
  }
  get Mphone(){
    return this.StudentForm.controls.Mother.controls.Phone;
  }
  get  Memail(){
    return this.StudentForm.controls.Mother.controls.Email;
  }
  get Emergency(){
    return this.StudentForm.controls.Emergency.controls.EmergencyContact;
  }
  get Reference(){
    return this.StudentForm.controls.Reference.controls.ReferenceContact;
  }
}






