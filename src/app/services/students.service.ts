import { Injectable } from '@angular/core';
import STUDENTS from '../mock-students.json';
import { Student } from '../models/student';
import { of, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  constructor() { }

  students: Student[] = STUDENTS.studentArray;
  
  fetchStudents(){
    return of(this.students)
  }

  addStudent(result: {'name':string, 'course':string} ){
    const lastId = this.students[this.students.length -1]?.id;
    const newStudent = { id: lastId+1, name: result.name, course: result.course }
    this.students = [...this.students, newStudent ];
    return of(this.students)
  }

  removeStudent(studentId: Number){
    this.students = this.students.filter(student => student.id !== studentId)
    return of(this.students)
  }

  editStudent(result: Student){
    const editedStudent = { id: result.id, name: result.name, course: result.course }
    this.students = this.students.map( student => student.id === result.id ? editedStudent : student );
    return of(this.students)
  }
}
