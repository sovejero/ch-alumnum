import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EnrollmentsComponent } from './enrollments.component';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EnrollmentsModule { }
