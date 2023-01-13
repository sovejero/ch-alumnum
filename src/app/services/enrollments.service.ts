import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, BehaviorSubject } from 'rxjs';
import { Enrollment } from '../models/enrollment';
import ENROLLMENTS from '../mock-enrollments.json';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  public enrollments$!: Observable<Enrollment[]>;
  enrollments = new BehaviorSubject(ENROLLMENTS.enrollmentArray);

  constructor(private http: HttpClient) {
    this.enrollments$ = this.enrollments.asObservable()
   }

  public fetchEnrollments(){
    return this.http.get('https://63ad75e8da81ba97619db751.mockapi.io/api/v1/enrollments');
  }
}
