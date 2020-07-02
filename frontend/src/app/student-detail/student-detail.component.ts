import { Component, OnInit, Inject } from '@angular/core';
<<<<<<< HEAD
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material/dialog";
=======
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
>>>>>>> e829185262e10af63df7d211341550613a719873
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../students.service';
// import { Student } from '../student.model';
import { Student } from '../models/student.model';
import { MatSnackBar } from '@angular/material/snack-bar';



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
    private _snackbar: MatSnackBar,

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
    //this.studentService.deleteStudent(this.id);
    //this.openDialog("Delete");

    const message = "Student Deleted";
    const action = "Undo";
    this._snackbar.open(message, action, {
      duration: 2000,
    });
    this.onClose();

  }

  openDialog(message: string) {

    let dialogRef = this.dialog.open(ActionComponent, {
      data: {
        message: message,
        index: this.id
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
  id: number;
  constructor(public dialogRef: MatDialogRef<ActionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.id = data.index;
  }

  onYes() {
<<<<<<< HEAD
    this.dialogRef.close({ data: "editing" })
  }
  onDelete() {
    console.log("deleted")
=======
    this.dialogRef.close({ data: 'editing' });
  }
  onDelete() {
    console.log('deleted');
>>>>>>> e829185262e10af63df7d211341550613a719873
  }
}

