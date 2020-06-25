import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model'
import { StudentService } from '../students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students: Student[];
  ngOnInit(): void {

    this.students=this.studentService.getStudents();

  }


}
