import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';

@NgModule({
  declarations: [EnrollmentsComponent, EnrollmentFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }
