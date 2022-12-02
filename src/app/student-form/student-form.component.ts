import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { COURSES } from "../mock-courses";

export function validatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(control.value);
    return !validpassword ? {validPassword: false} : null;
  };
};

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public inputFields = [
    { fieldName: 'id', errorMessage: ''} ,
    { fieldName: 'name', errorMessage: 'Required, please complete field' },
    { fieldName: 'password', errorMessage:
      `Minimum 8 characters length.
      At least 1 digit.
      At least 1 lower case letter.
      At least 1 upper case letter.`
    },
    { fieldName: 'email', errorMessage: 'Complete with email format'},
  ]
  
  studentModel = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    course: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), validatePassword()]),
    email: new FormControl('', Validators.email),
  });
  
  courses = COURSES;

  constructor() {
  }

  ngOnInit(): void {
    this.studentModel.get('course')?.valueChanges.subscribe( (value) => { console.log(value)});
  }
  onSubmit(){
    console.log(this.studentModel.value)
  }
}
