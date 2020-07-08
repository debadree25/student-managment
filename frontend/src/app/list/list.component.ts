import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
// import { timeStamp } from 'console';
import { ServerResponse } from '../models/server-response.model';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterDept: string;
  filterYear: number;
  students: Student[];
  listView = true;
  constructor(
    public dialog: MatDialog,
    private rest: RestService,
    private state: StateService) {
    this.fetchData();
    this.state.listUpdates$.subscribe((message) => {
      if (message === 'update') {
        this.fetchData();
      }
    });
  }

  ngOnInit(): void {
  }

  async filter() {
    let resp: ServerResponse<Student[]>;
    if (this.filterYear && this.filterDept) {
      resp = await this.rest.getStudents({ year: this.filterYear, department: this.filterDept });
    }
    else if (this.filterYear) {
      resp = await this.rest.getStudents({ year: this.filterYear });
    }
    else if (this.filterDept) {
      resp = await this.rest.getStudents({ department: this.filterDept });
    }
    this.students = resp.data;
  }

  async clearFilter() {
    this.filterDept = '';
    this.filterYear = null;
    this.fetchData();
  }

  async fetchData() {
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
  }

  openDialog(student: Student, index: number) {
    console.log(index);
    const dialogRef = this.dialog.open(StudentDetailComponent, {
      data: {
        studentData: student,
        id: index,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
// @Component({
//   selector: 'app-list-dialog',
//   templateUrl: 'list-dialog.component.html',
// })
// export class AppListDialogComponent {
//   constructor(public dialogRef: MatDialogRef<AppListDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Student) {
//   }
// }


    // const dialogRef = this.dialog.open(StudentDetailComponent, {
    //   data: {
    //     name: student.name,
    //     stream: student.stream,
    //     year: student.year,
    //     url: student.imgUrl,
    //     email: student.email,
    //     phone: student.contactNo,
    //     address: student.address,
    //     graduateYear:student.graduateYear
    //   },

      // const dialogRef ;

      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog result: ${result}`);
      // });
