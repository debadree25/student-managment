import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from '../student.model'
import { StudentService } from '../students.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  students: Student[];
  ngOnInit(): void {

    this.students = this.studentService.getStudents();

  }


  openDialog(student: Student) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

     

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
