import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Student } from '../student.model'
import { StudentService } from '../students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private studentService: StudentService,public dialog: MatDialog) { }

  students: Student[];
  ngOnInit(): void {

    this.students=this.studentService.getStudents();

  }


  openDialog() {
    const dialogRef = this.dialog.open( DialogElementsExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
  @Component({
    selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  })
  export class DialogElementsExampleDialog {}

  


