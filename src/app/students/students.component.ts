import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  public students: Student[] = [];
  columnsToDisplay = ['id', 'name','course', 'edit', 'delete'];

  constructor( private readonly dialogService: MatDialog, private studentsService: StudentsService) { }

  ngOnInit(): void {
    //this.students = this.studentsService.fetchStudents();
    this.studentsService.fetchStudents().subscribe(
      values => this.students = values
    )
  }

  ngOnDestroy(): void {
    //
  }
  
  onAddStudent(){
    const addStudentForm = this.dialogService.open(StudentFormComponent);

    addStudentForm.afterClosed().subscribe( result => {
      if(result) {
        this.studentsService.addStudent(result).subscribe( value =>
          this.students = value
        )
      }
    })
  }

  onRemoveStudent(studentId: Number){
    this.studentsService.removeStudent(studentId).subscribe( values =>
      this.students = values
      )
  }

  onEditStudent(student: Student){
    const editStudentForm = this.dialogService.open(StudentFormComponent, {data: student});

    editStudentForm.afterClosed().subscribe( result => {
      if(result) {
        this.studentsService.editStudent(result).subscribe( value =>
          this.students = value
        )
      }
    })
  }
}
