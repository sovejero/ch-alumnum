import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users',
  loadChildren: () => import('./users/users.module').then((module) => module.UsersModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule)
  },
  {
    path: 'enrollments',
    loadChildren: () => import('./enrollments/enrollments.module').then((module) => module.EnrollmentsModule)
  },
  { path: '',   redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
