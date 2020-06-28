import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../students.service';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

editmode=false;
id:number;
  name: string = ""
  stream: string = ""
  year: string = ""
  imgUrl: string = ""
  email: string = ""
  phone: string = ""
  address: string = ""
  graduateYear: string = ""
  constructor(

    private dialogRef: MatDialogRef<StudentDetailComponent>,private route:Router,private router:ActivatedRoute,  private studentService:StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    if (data) {
      this.name = data.name || this.name;
      this.stream = data.stream || this.stream;
      this.year = data.year || this.year;
      this.imgUrl = data.url || this.imgUrl;
      this.address = data.address || this.address;
      this.phone = data.phone || this.phone;
      this.graduateYear = data.graduateYear || this.graduateYear;
      this.email = data.email || this.email;

    }
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

  onEdit(){
    this.editmode=true;
    this.route.navigate(['/newStudent']);
    this.onClose();
  }

  onCopy(){
    console.log("copied");
  }
  onDelete(){  
    
    this.studentService.deletePost(this.id);
    this.route.navigate(['./'],{relativeTo:this.router});
    this.onClose();
  }
}
