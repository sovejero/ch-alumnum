import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../services/enrollments.service';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  
  public enrollmentsObservable: Observable<Enrollment[]> | undefined;
  columnsToDisplay = ['id', 'idStudent','idCourse', 'dateEnrollment', 'idUser', 'edit', 'delete'];

  constructor(public enrollmentsService: EnrollmentsService,  private readonly dialogService: MatDialog) {
    this.enrollmentsObservable = this.enrollmentsService.enrollments$;
   }

  ngOnInit(): void {
  }

  onAddEnroll(){
    const addEnrollForm = this.dialogService.open(EnrollmentFormComponent);

    addEnrollForm.afterClosed().subscribe( result => {
      if(result) {
        this.enrollmentsService.addEnrollment(result)
      }
    })
  }

  onRemoveEnrollment(enrollmentId: Number) {
    this.enrollmentsService.removeEnrollment(enrollmentId);
  }

  onEditEnrollment(enrollment: Enrollment){
    const editCourseForm = this.dialogService.open(EnrollmentFormComponent, {data: enrollment});

    editCourseForm.afterClosed().subscribe( result => {
      if(result) {
        this.enrollmentsService.editEnrollment(result)
      }
    })
  }
}
