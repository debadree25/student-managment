import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageSnippet } from '../models/image.model';
import { RestService } from '../services/rest.service';

declare var previewFile: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private rest: RestService) { }

  url: ArrayBuffer;
  student: Student;



  selectedFile: ImageSnippet;


  ngOnInit(): void {
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
    }
    else {
      alert('New student not added');
    }
    this.router.navigate([''], { relativeTo: this.route });
  }
}