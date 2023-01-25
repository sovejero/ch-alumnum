import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((module) => module.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'enrollments',
    loadChildren: () => import('./enrollments/enrollments.module').then((module) => module.EnrollmentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((module) => module.LoginModule),
  },
  { 
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
