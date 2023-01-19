import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [StudentsComponent, StudentFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
