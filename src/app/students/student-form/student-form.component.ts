import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import COURSES from "../../mock-courses.json";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  courses = COURSES.coursesArray;
  
  studentForm = new FormGroup({
    id: new FormControl(this.data?.id),
    name: new FormControl(this.data?.name, [Validators.required, Validators.maxLength(250)]),
    course: new FormControl(this.data?.course, Validators.required),
  });
  
  constructor(
    public addStudentForm: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | null,
    ) {
  }

  ngOnInit(): void {
    this.studentForm.get('course')?.valueChanges.subscribe( (value) => { console.log(value)});
  
  }
  onSubmit(){
    console.log(this.studentForm.value)
    this.addStudentForm.close(this.studentForm.value);
  }
}
