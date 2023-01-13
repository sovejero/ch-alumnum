import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent implements OnInit {
  
  courseForm = new FormGroup({
    id: new FormControl(this.data?.id),
    name: new FormControl(this.data?.name, [Validators.required, Validators.maxLength(250)]),
    hours: new FormControl(this.data?.hours, Validators.required),
    lessons: new FormControl(this.data?.lessons, Validators.required),
    professor: new FormControl(this.data?.professor, Validators.required),
  });
  
  constructor(
    public addCourseForm: MatDialogRef<CourseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course | null,
    ) {  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.courseForm.value)
    this.addCourseForm.close(this.courseForm.value);
  }
}
