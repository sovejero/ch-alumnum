import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsService } from '../services/students.service';
import { Observable, Subscription, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  columnsToDisplay = ['id', 'name','course', 'edit', 'delete'];
  
  public students: Student[] = [];
  private studentSubscription!: Subscription;

  constructor(
    private readonly dialogService: MatDialog,
    private studentsService: StudentsService,
    ) { }

  ngOnInit(): void {
    this.students = this.studentsService.fetchStudents();
    this.studentSubscription = this.studentsService.studentsChanged.subscribe(
      values => this.students = values
    )
  }

  ngOnDestroy(): void {
    if (!!this.studentSubscription) this.studentSubscription.unsubscribe();
  }
  
  onAddStudent(){
    const addStudentForm = this.dialogService.open(StudentFormComponent);

    addStudentForm.afterClosed().subscribe( result => {
      if(result) {
        this.studentsService.addStudent(result)
      }
    })
  }

  onRemoveStudent(studentId: Number){
    this.studentsService.removeStudent(studentId)
  }

  onEditStudent(student: Student){
    const editStudentForm = this.dialogService.open(StudentFormComponent, {data: student});

    editStudentForm.afterClosed().subscribe( result => {
      if(result) {
        this.studentsService.editStudent(result)
      }
    })
  }
}
