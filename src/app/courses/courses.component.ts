import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';
import { MatDialog } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public coursesObservable: Observable<any> | undefined;
  columnsToDisplay = ['id', 'name','hours', 'lessons', 'professor', 'details', 'edit', 'delete'];

  constructor(public coursesService: CoursesService, private readonly dialogService: MatDialog) {
    this.coursesObservable = this.coursesService.courses$;
   }

  ngOnInit(): void {
    
  }
  onAddCourse(){
    const addCourseForm = this.dialogService.open(CourseFormComponent);

    addCourseForm.afterClosed().subscribe( result => {
      if(result) {
        this.coursesService.addCourse(result)
      }
    })
  }

  onRemoveCourse(courseId: Number) {
    this.coursesService.removeCourse(courseId);
  }

  onEditCourse(course: Course){
    const editCourseForm = this.dialogService.open(CourseFormComponent, {data: course});

    editCourseForm.afterClosed().subscribe( result => {
      if(result) {
        this.coursesService.editCourse(result)
      }
    })
  }
}
