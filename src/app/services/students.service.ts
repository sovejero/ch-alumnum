import { Injectable } from '@angular/core';
import STUDENTS from '../mock-students.json';
import { Student } from '../models/student';
import { of, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  
  studentsChanged = new Subject<Student[]>();
  students: Student[] = STUDENTS.studentArray;
  
  constructor() {}
  
  fetchStudents(){
    this.studentsChanged.next(this.students)
    return this.students
  }

  addStudent(result: {'name':string, 'course':string} ){
    const lastId = this.students[this.students.length -1]?.id;
    const newStudent = { id: lastId+1, name: result.name, course: result.course };

    this.students = [...this.students, newStudent ];
    this.studentsChanged.next(this.students)
  }

  removeStudent(studentId: Number){
    this.students = this.students.filter(student => student.id !== studentId);
    this.studentsChanged.next(this.students)
  }

  editStudent(result: Student){
    const editedStudent = { id: result.id, name: result.name, course: result.course }
    
    this.students = this.students.map( student => student.id === result.id ? editedStudent : student );
    this.studentsChanged.next(this.students);
  }
}
