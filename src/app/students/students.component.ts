import { Component, OnInit } from '@angular/core';
import STUDENTS from '../mock-students.json';
import { Student } from '../models/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = STUDENTS.studentArray;
  columnsToDisplay = ['id', 'name','course', 'edit', 'delete'];

  constructor( private readonly dialogService: MatDialog) { }

  ngOnInit(): void {}
  
  addStudent(){
    const addStudentForm = this.dialogService.open(StudentFormComponent);

    addStudentForm.afterClosed().subscribe( result => {
      if(result) {
      const lastId = this.students[this.students.length -1]?.id;
      const newStudent = { id: lastId+1, name: result.name, course: result.course }
      this.students = [...this.students, newStudent ];
      console.log(this.students);
      }
    })
  }

  removeStudent(studentId: Number){
    this.students = this.students.filter(student => student.id !== studentId)
  }

  editStudent(student: Student){
    const editStudentForm = this.dialogService.open(StudentFormComponent, {data: student});

    editStudentForm.afterClosed().subscribe( result => {
      if(result) {
      const editedStudent = { id: result.id, name: result.name, course: result.course }
      this.students = this.students.map( student => student.id === result.id ? editedStudent : student ); 
      }
    })
  }

}
