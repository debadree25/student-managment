<<<<<<< HEAD
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';
=======
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from '../student.model'
import { StudentService } from '../students.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
>>>>>>> 56dd0db02cc15813f76e312ed99bcfe2dd7dc744

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

<<<<<<< HEAD
  constructor(
              public dialog: MatDialog,
              private rest: RestService) {
    this.fetchData();
  }

  students: Student[];
=======
  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  students: Student[];
  ngOnInit(): void {

    this.students = this.studentService.getStudents();
>>>>>>> 56dd0db02cc15813f76e312ed99bcfe2dd7dc744

  ngOnInit(): void {
  }

  async fetchData() {
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
  }

  openDialog(student: Student) {
<<<<<<< HEAD
    const dialogRef = this.dialog.open(AppListDialogComponent, {
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'app-list-dialog',
  templateUrl: 'list-dialog.component.html',
})
export class AppListDialogComponent {
  constructor(public dialogRef: MatDialogRef<AppListDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Student) {
  }
}


=======

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

     
>>>>>>> 56dd0db02cc15813f76e312ed99bcfe2dd7dc744

    const dialogRef = this.dialog.open(StudentDetailComponent, {
      data: {
        name: student.name,
        stream: student.stream,
        year: student.year,
        url: student.imgUrl,
        email: student.email,
        phone: student.contactNo,
        address: student.address,
        graduateYear:student.graduateYear
      },

      // const dialogRef ;

      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog result: ${result}`);
      // });
    })
  }
}
