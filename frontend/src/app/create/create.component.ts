import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../models/student.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImageSnippet } from '../models/image.model';
import { RestService } from '../services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var previewFile: any;

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    url: ArrayBuffer;
    student: Student;
    studentId = null;
    imgPreview: string;
    form: FormGroup
    mode = 'Create';
    selectedFile: ImageSnippet;
    constructor(private router: Router,
        private route: ActivatedRoute,
        private _snackBar: MatSnackBar,
        private rest: RestService) {
        if (this.router.getCurrentNavigation().extras.state != undefined) {
            this.student = this.router.getCurrentNavigation().extras.state.data;
        }
        console.log(this.student);
    }

    ngOnInit(): void {

        this.form = new FormGroup({
            _id: new FormControl(null, { validators: [Validators.required] }),
            name: new FormControl(null, { validators: [Validators.required] }),
            department: new FormControl(null, { validators: [Validators.required] }),
            address: new FormControl(null, { validators: [Validators.required] }),
            joining_year: new FormControl(null, { validators: [Validators.required] }),
            year: new FormControl(null, { validators: [Validators.required] }),
            passing_year: new FormControl(null, { validators: [Validators.required] }),
            email: new FormControl(null, { validators: [Validators.required] }),
            phone: new FormControl(null, { validators: [Validators.required] }),
            socials: new FormControl(null, { validators: [Validators.required] }),
            image: new FormControl(null, { validators: [Validators.required] })
        })
    }


    onImagePicked($event: Event) {

        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({ image: file }); //for single control
        this.form.get('image').updateValueAndValidity();
        //asks angular to store and update value;
        const reader = new FileReader();
        reader.onload = () => {
            this.imgPreview = reader.result as string;
        };

        reader.readAsDataURL(file);


    }

    async onSubmit() {
        const value = this.form.value;
        console.log(value);
        const { _id, name, department, address, joining_year, year, passing_year, email, phone } = value;
        const student: Student = {

            name, _id,
            department,
            address,
            joining_year: parseInt(joining_year, 10),
            year: parseInt(year, 10),
            passing_year: parseInt(passing_year, 10),
            email,
            phone
        };
        console.log(student);
        const resp = await this.rest.addStudent(student);
        if (resp.status) {
            alert('New student added');
            // snackbar
            const message = 'Student Added';
            const action = 'Undo';
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        }
        else {
            alert('New student not added');
        }
        this.router.navigate(['/dashboard'], { relativeTo: this.route });
    }
}
