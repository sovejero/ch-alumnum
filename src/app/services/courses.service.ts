import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable, take, BehaviorSubject } from 'rxjs';
import COURSES from '../mock-courses.json';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses$!: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);

  constructor(private http: HttpClient) {
    this.courses$ = this.courses.asObservable();
    this.fetchCourses().subscribe( course => {
      this.courses.next(course);
    });
   }

  public fetchCourses(){
    return this.http.get<Course[]>(`${environment.baseURL}course`);
  }

  addCourse(result: Omit<Course, 'id'> ){
    this.courses.pipe(take(1)).subscribe( (courses) => {
      const lastId = parseInt(`${courses[courses.length -1]?.id}`);
      const newCourse = {id: lastId+1, name: result.name, hours: result.hours, lessons: result.lessons, professor: result.professor };
      console.log(newCourse)
      this.courses.next([...courses, newCourse ])
    })
  }

  removeCourse(courseId: Number){
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(courses.filter((course) => course.id !== courseId))
    })
  }

  editCourse(result: Course){
    this.courses.pipe(take(1)).subscribe((courses) => {
      const editedCourse = { id: result.id, name: result.name, hours: result.hours, lessons: result.lessons, professor: result.professor };
      
      this.courses.next(
        courses.map(course => course.id === editedCourse.id ? editedCourse : course)
      )
    })
  }

}
