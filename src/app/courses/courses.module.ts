import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class CoursesModule { }
