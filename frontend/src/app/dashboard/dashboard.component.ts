import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  students:Student[];
  buttonClickd=false;

  ngOnInit(): void {
  }

  onClick(){
    this.buttonClickd=true;
    this.students=this.studentService.getStudents();
    console.log(this.students);
    
  }

}
