import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })

export class StudentService {

    private students: Student[] = [
        {
            name: 'Debadree Chatterjee',
            imgUrl:"https://wprdea.org/image/img_avatar.png",
            contactNo: "9845678",
            email:"sristi2705@gmail.com",
            address: "Barrackpore",
            year: "2nd Year",
            stream: "IT", 
            graduateYear: "2023"
        },
        {
            name: 'Srist Chowdhury',
            imgUrl: "https://wprdea.org/image/img_avatar.png",
            contactNo: "9845678",
            email:"sristi2705@gmail.com",
            address: "Barrackpore",
            year: "3rd Year",
            stream: "IT",
            graduateYear: "2022"
        }

    ];

    getStudents() {
        return [...this.students];
    }

    addStudents(student:Student){
        this.students.push({
            name: student.name,
            imgUrl:student.imgUrl,
            contactNo: student.contactNo,
            email:student.email,
            address:student.address,
            year: student.year,
            stream:student.stream,
            graduateYear:student.graduateYear

        });
        console.log(this.students.length);
    }

    uploadImage(file:File){
      console.log("compiled");

           }

     
}

