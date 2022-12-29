import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public coursesObservable: Observable<any> | undefined;

  constructor(public coursesService: CoursesService,) { }

  ngOnInit(): void {
    this.coursesObservable = this.coursesService.fetchCourses();
  }

}
