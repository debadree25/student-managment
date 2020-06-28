import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })

export class StudentService {

    private students: Student[] = [
        {
            name: 'Debadree Chatterjee',
            imgUrl: "https://wprdea.org/image/img_avatar.png",
            contactNo: "9845678",
            email: "sristi2705@gmail.com",
            address: "Barrackpore",
            year: "2nd",
            stream: "IT",
            graduateYear: "2023"
        },
        {
            name: 'Sristi Chowdhury',
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNU6thkHYg_NEpP2n3JBwK8CfWbGtvLTba-Q&usqp=CAU",
            contactNo: "9845678",
            email: "sristi2705@gmail.com",
            address: "Barrackpore",
            year: "3rd",
            stream: "IT",
            graduateYear: "2022"
        },
        {
            name: 'Sristi Chowdhury',
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNU6thkHYg_NEpP2n3JBwK8CfWbGtvLTba-Q&usqp=CAU",
            contactNo: "9845678",
            email: "sristi2705@gmail.com",
            address: "Barrackpore",
            year: "3rd",
            stream: "IT",
            graduateYear: "2022"
        }

    ];

    getStudents() {
        return [...this.students];
    }

    addStudents(student: Student) {
        this.students.push({
            name: student.name,
            imgUrl: student.imgUrl,
            contactNo: student.contactNo,
            email: student.email,
            address: student.address,
            year: student.year,
            stream: student.stream,
            graduateYear: student.graduateYear

        });
        console.log(this.students.length);
    }

    uploadImage(file: File) {
        console.log("compiled");

    }


}

