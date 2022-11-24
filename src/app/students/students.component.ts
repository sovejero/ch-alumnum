import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  stockAvatarUrl = 'assets/avatar.png';

  constructor() { }

  ngOnInit(): void {
  }

}
