import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import STUDENTS from '../mock-students.json';
import { Student } from '../models/student';
import { of, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  constructor(private http: HttpClient) { }

  students: Student[] = STUDENTS.studentArray;
  
  fetchStudents(){
    return of(this.students)
    //this.http.get('../mock-students.json');
  }

  createStudent(){

  }

  deleteStudent(studentId: Number){
    this.students = this.students.filter(student => student.id !== studentId)
  }

  editStudent(){

  }
}
