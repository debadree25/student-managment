import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../students.service';
//import { Student } from '../student.model';
import {Student} from '../models/student.model';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  editmode = false;
  id: number;
  
  constructor(

    private dialogRef: MatDialogRef<StudentDetailComponent>, private route: Router, private router: ActivatedRoute, private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: Student) {

    
  }

  ngOnInit() {

  }

  save() {
    //console.log(this.description)
    console.log("saved");
  }

  onClose() {
    console.log("closed")
    this.dialogRef.close();
  }

  onEdit() {
    this.editmode = true;
  }

  onCopy(){
    console.log("copied")
  }

  onDelete() {
    this.studentService.deleteStudent(this.id);
  }
}
