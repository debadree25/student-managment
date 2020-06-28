import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../students.service';
import { Student } from '../student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageSnippet } from '../image.model';

declare var previewFile: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  url: ArrayBuffer;
  student: Student;
  editmode=false;


  ngOnInit(): void {
  }



  selectedFile: ImageSnippet;

  func() {
    new previewFile();
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log(imageInput.files[0]);
    //console.log(imageInput.files[1]);

    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      
      this.selectedFile = {
        src: event.target.result,
        file: file
      };
      //console.log(event.target.result);
      //console.log(this.selectedFile.file);

      this.studentService.uploadImage(this.selectedFile.file);
    });

    console.log(reader.readAsDataURL(file));
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    console.log(value.name);
    this.studentService.addStudents(
      {
        name: value.name,
        imgUrl: value.img,
        address: value.address,
        graduateYear: value.passoutYear,
        stream: value.stream,
        year: value.year,
        email: value.email,
        contactNo: value.contactNo


      })
    this.router.navigate([''], { relativeTo: this.route });


  }
}