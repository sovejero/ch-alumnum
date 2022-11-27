import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-students';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  stockAvatarUrl = 'assets/avatar.png';
  selectedStudent?: Student;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
