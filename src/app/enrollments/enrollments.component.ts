import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../services/enrollments.service';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  
  public enrollmentsObservable: Observable<Enrollment[]> | undefined;
  columnsToDisplay = ['id', 'idStudent','idCourse', 'dateEnrollment', 'idUser'];

  constructor(public enrollmentsService: EnrollmentsService) {
    this.enrollmentsObservable = this.enrollmentsService.enrollments$;
   }

  ngOnInit(): void {
  }

}
