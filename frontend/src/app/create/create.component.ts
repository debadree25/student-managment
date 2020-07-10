import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../models/student.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImageSnippet } from '../models/image.model';
import { RestService } from '../services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {mimType} from './mime-type.validator';
import { RoutesService } from '../services/routes.service';
import { StateService } from '../services/state.service';

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
    form: FormGroup;
    mode = 'Create';
    selectedFile: ImageSnippet;
    file: File;
    dataBlob: Blob;
    constructor(private router: Router,
                private route: ActivatedRoute,
                public  routes:RoutesService,
                // tslint:disable-next-line: variable-name
                private _snackBar: MatSnackBar,
                private state:StateService, 
                //private _location: Location,
                private rest: RestService) {
        // tslint:disable-next-line: triple-equals
        if (this.router.getCurrentNavigation().extras.state != undefined) {
            this.student = this.router.getCurrentNavigation().extras.state.data;
        }
        this.downloadImageStudent();
        this.form = new FormGroup({
            _id: new FormControl(null),
            name: new FormControl(this.student?.name, { validators: [Validators.required] }),
            department: new FormControl(this.student?.department, { validators: [Validators.required] }),
            address: new FormControl(this.student?.address, { validators: [Validators.required] }),
            joining_year: new FormControl(this.student?.joining_year, { validators: [Validators.required] }),
            year: new FormControl(this.student?.year, { validators: [Validators.required] }),
            passing_year: new FormControl(this.student?.passing_year, { validators: [Validators.required] }),
            email: new FormControl(this.student?.email, { validators: [Validators.required] }),
            phone: new FormControl(this.student?.phone, { validators: [Validators.required] }),
            image: new FormControl(this.dataBlob, { validators: [Validators.required],
                asyncValidators: [mimType]})
                // only accept images
        });
        console.log(this.form);
        console.log(this.student);
    }

    ngOnInit(): void {
    }

    async downloadImageStudent() {
        if (this.student) {
            const resp = await this.rest.downloadImage(this.student.image);
            this.dataBlob = resp;
            console.log(this.dataBlob);
            this.form.patchValue({image: this.dataBlob});
            this.form.get('image').updateValueAndValidity();
            this.imgPreview = `${this.rest.baseUrl}images/${this.student.image}`;
        }
    }

    onImagePicked($event: Event) {
        this.file = ($event.target as HTMLInputElement).files[0];
        this.form.patchValue({ image: this.file }); // for single control
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imgPreview = reader.result as string;
        };

        reader.readAsDataURL(this.file);
    }

    async onSubmit() {
        if (this.routes.route=="/newStudent"){
        const value = this.form.value;
        console.log(value);
        const { name, department, address, joining_year, year, passing_year, email, phone} = value;
        const student: Student = {
            name,
            department,
            address,
            joining_year: parseInt(joining_year, 10),
            year: parseInt(year, 10),
            passing_year: parseInt(passing_year, 10),
            email,
            phone,
        };
        console.log(student);
        const resp = await this.rest.addStudent(student, this.file);
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
    }
    else if(this.routes.route==='/editStudent'){
        const value = this.form.value;
        console.log(value);
        const { name, department, address, joining_year, year, passing_year, email, phone} = value;
        const student: Student = {
            name,
            department,
            address,
            joining_year: parseInt(joining_year, 10),
            year: parseInt(year, 10),
            passing_year: parseInt(passing_year, 10),
            email,
            phone,
        };
        console.log(student);
        const resp = await this.rest.updateStudent(student, this.file);
        if (resp.status) {
            alert('Student Data updted');
            // snackbar
            const message = 'Student Data Updated';
            const action = 'Undo';
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        }
        else {
            alert('Data not updated');
        }

    }
        
    
    this.router.navigate(['/dashboard']);
    }

    onClose(){
        window.history.back();
    }
}
