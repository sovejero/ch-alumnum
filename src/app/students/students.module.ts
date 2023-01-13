import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [StudentsComponent, StudentFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ]
})
export class StudentsModule { }
