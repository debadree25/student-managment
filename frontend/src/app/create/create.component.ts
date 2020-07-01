import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    constructor(private router: Router,
        private route: ActivatedRoute,
        private _snackBar: MatSnackBar,
        private rest: RestService) { }

    url: ArrayBuffer;
    student: Student;
    studentId = null;
    mode = "Create"



    selectedFile: ImageSnippet;


    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            //console.log(paramMap)
            if (paramMap.has("id")) {
                this.mode = "Update";
                this.studentId = paramMap.get("id")
                //console.log(this.studentId)
                this.rest.getStudentById(this.studentId).subscribe(resp => {
                    console.log(resp.data);
                    this.student = {
                        name: resp.data.name,
                        address: resp.data.address,
                        year: resp.data.year,
                        joining_year: resp.data.joining_year,
                        passing_year: resp.data.passing_year,
                        email: resp.data.email,
                        phone: resp.data.phone,
                        department: resp.data.department,

                    }
                    console.log(this.student)

                })
            }
            else {
                this.mode = "Create"
                this.studentId = null;
            }
        }
        )
    }



    func() {
        new previewFile();
    }
    processFile(imageInput: any) {
        const file: File = imageInput.files[0];
        console.log(imageInput.files[0]);
        // console.log(imageInput.files[1]);

        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {

            this.selectedFile = {
                src: event.target.result,
                file: file
            };
            // console.log(event.target.result);
            // console.log(this.selectedFile.file);

            // this.studentService.uploadImage(this.selectedFile.file);
        });

        console.log(reader.readAsDataURL(file));
    }

    async onSubmit(f: NgForm) {
        const value = f.value;
        console.log(value);
        const { name, department, address, joining_year, year, passing_year, email, phone } = value;
        const student: Student = {
            name,
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
            //snackbar
            const message = "Student Added";
            const action = "Undo";
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        }
        else {
            alert('New student not added');
        }

        // else {
        //     this.rest.updateStudent(
        //       this.postId,
        //       form.value.title,
        //       form.value.content
        //     );
        //   }
        this.router.navigate([''], { relativeTo: this.route });
    }
}