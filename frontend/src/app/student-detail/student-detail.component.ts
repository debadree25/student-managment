import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { StudentService } from '../students.service';
// import { Student } from '../student.model';
import { Student } from '../models/student.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService } from '../services/rest.service';
import { StateService } from '../services/state.service';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  editmode = false;
  student: Student;
  id: string;

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<StudentDetailComponent>,
    private route: Router, private router: ActivatedRoute,
    private rest: RestService,
    // tslint:disable-next-line: variable-name
    private _snackbar: MatSnackBar,
    private state: StateService,
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

  async onDelete() {
    // this.studentService.deleteStudent(this.id);
    // this.openDialog("Delete");
    console.log(this.student);
    const resp = await (this.rest.deleteStudent(this.student._id));
    console.log(resp);
    const msg = 'Student Deleted';
    const action = 'Undo';
    this._snackbar.open(msg, action, {
      duration: 2000,
    });
    this.onClose();
    this.state.updateList();
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
      // tslint:disable-next-line: triple-equals
      if (message == 'Delete') {
        this.dialogRef.close();
        this.onDelete();
      }
      else if(message=='Edit'){
        this.dialogRef.close();
        this.onClose();
        
      }
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
}

