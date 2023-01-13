import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';

@NgModule({
  declarations: [EnrollmentsComponent, EnrollmentFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EnrollmentsModule { }
