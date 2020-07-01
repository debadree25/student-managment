import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../students.service';
// import { Student } from '../student.model';
import { Student } from '../models/student.model';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  editmode = false;
  student: Student;
  id: number;

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<StudentDetailComponent>,
    private route: Router, private router: ActivatedRoute,
    private studentService: StudentService,

    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.student = data.studentData;
    this.id = data.id;


  }

  ngOnInit() {
    // console.log(this.student, this.id)
  }

  save() {
    // console.log(this.descriptFion)
    console.log('saved');

  }

  onClose() {
    console.log('closed');
    this.dialogRef.close();
  }

  onEdit() {
    this.editmode = true;
    /// this.openDialog("Edit");
    // this.onClose();

  }

  onCopy() {
    console.log('copied');
    // this.onClose();
  }

  onDelete() {
    // this.studentService.deleteStudent(this.id);
    // this.openDialog("Delete");
    this.onClose();

  }

  openDialog(message: string) {

    const dialogRef = this.dialog.open(ActionComponent, {
      data: {
        message,
        student: this.student
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    });
  }
}
@Component({
  selector: 'app-action',
  templateUrl: 'action.component.html',
})
export class ActionComponent {
  student: Student;
  constructor(public dialogRef: MatDialogRef<ActionComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router) {

    this.student = data.student;
  }

  onYes() {
    this.dialogRef.close({ data: 'editing' });
  }
  onDelete() {
    console.log('deleted');
  }
}

