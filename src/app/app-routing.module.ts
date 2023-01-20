import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((module) => module.UsersModule),
    canActivate: [AuthGuard],
    title: "Users"
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule),
    title: "Students"
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule),
    title: "Courses"
  },
  {
    path: 'enrollments',
    loadChildren: () => import('./enrollments/enrollments.module').then((module) => module.EnrollmentsModule),
    title: "Enrollments"
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((module) => module.LoginModule),
    title: "Login"
  },
  { path: '',   redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
