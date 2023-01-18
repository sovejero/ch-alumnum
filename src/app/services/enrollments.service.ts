import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, BehaviorSubject, EmptyError } from 'rxjs';
import { Enrollment } from '../models/enrollment';
import ENROLLMENTS from '../mock-enrollments.json';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  public enrollments$!: Observable<Enrollment[]>;
  private enrollments = new BehaviorSubject<Enrollment[]>([]);

  constructor(private http: HttpClient) {
    this.enrollments$ = this.enrollments.asObservable()
    this.fetchEnrollments().subscribe( enroll => {
      this.enrollments.next(enroll);
    });
   }

  fetchEnrollments(){
    return this.http.get<Enrollment[]>(`${environment.baseURL}enrollments`);
  }

  addEnrollment(result: Omit<Enrollment, 'id'> ){
    this.enrollments.pipe(take(1)).subscribe( (enrollments) => {
      const lastId = parseInt(`${enrollments[enrollments.length -1]?.id}`);
      const newEnrollment = {id: lastId+1, idStudent: result.idStudent, idCourse: result.idCourse, dateEnrollment: result.dateEnrollment, idUser: result.idUser };
      console.log(newEnrollment)
      this.enrollments.next([...enrollments, newEnrollment ])
    })
  }

  removeEnrollment(enrollmentId: Number){
    this.enrollments.pipe(take(1)).subscribe((enrollments) => {
      this.enrollments.next(enrollments.filter((enroll) => enroll.id !== enrollmentId))
    })
  }

  editEnrollment(result: Enrollment){
    this.enrollments.pipe(take(1)).subscribe((enrollments) => {
      const editedEnroll = { id: result.id, idStudent: result.idStudent, idCourse: result.idCourse, dateEnrollment: result.dateEnrollment, idUser: result.idUser };
      
      this.enrollments.next(
        enrollments.map(enrollment => enrollment.id === editedEnroll.id ? editedEnroll : enrollment)
      )
    })
  }
}
