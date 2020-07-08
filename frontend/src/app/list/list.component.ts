import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterDept: string;
  rowHeight;
  filterYear: number;
  students: Student[];
  listView = true;
  constructor(
    public dialog: MatDialog,
    private rest: RestService) {
    this.fetchData();
  }

  ngOnInit(): void {
  }

  async filter() {
    if (this.filterYear || this.filterDept) {
      const resp = await this.rest.getStudents({year: this.filterYear, department: this.filterDept});
      this.students = resp.data;
    }
  }

  async clearFilter() {
    this.filterDept = '';
    this.filterYear = null;
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
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
