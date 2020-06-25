import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../students.service';
import { Student } from '../student.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) { }
  student:Student;
  ngOnInit(): void {
  }
onSubmit(f:NgForm){
 const value=f.value;
 console.log(value.name);
  this.studentService.addStudents(
    {
      name:value.name,
      imgUrl:"https://cdn.imgbin.com/4/14/10/imgbin-computer-icons-user-woman-uu7bJqFCDiiGjiWc8w2JEum1H.jpg",
      address:value.address,
      graduateYear:value.passoutYear,
      stream:value.stream,
      year:value.year,
      email:value.email,
      contactNo:value.contactNo


    })
    this.router.navigate([''],{relativeTo:this.route});

  
}
}
