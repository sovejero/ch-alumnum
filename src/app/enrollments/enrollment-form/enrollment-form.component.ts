import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Enrollment } from 'src/app/models/enrollment';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.scss']
})
export class EnrollmentFormComponent implements OnInit {
  enrollForm = new FormGroup({
    id: new FormControl(this.data?.id),
    idStudent: new FormControl(this.data?.idStudent, Validators.required),
    idCourse: new FormControl(this.data?.idCourse, Validators.required),
    dateEnrollment: new FormControl(this.data?.dateEnrollment, Validators.required),
    idUser: new FormControl(this.data?.idUser, Validators.required),
  });
  
  constructor(
    public addEnrollForm: MatDialogRef<EnrollmentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Enrollment | null,
    ) {  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.enrollForm.value)
    this.addEnrollForm.close(this.enrollForm.value);
  }
}
