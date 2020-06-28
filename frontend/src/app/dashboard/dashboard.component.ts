import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[];
  len = 0;
  constructor(private rest: RestService) {
    this.fetchData();
  }

  // students:Student[];
  // buttonClickd=false;

  ngOnInit(): void {
  }

  async fetchData() {
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
    this.len = this.students.length;
  }

  // onClick(){
  //   this.buttonClickd=true;
  //   this.students=this.studentService.getStudents();
  //   console.log(this.students);
  // }

}
