import { Injectable } from '@angular/core';
import { Student } from './models/student.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class StudentService {

    studentsUpdated = new Subject<Student[]>();
    startedEditing = new Subject<number>();

    private students: Student[] = [];
       



    getStudents() {
        return [...this.students];
    }

    // addStudents(student: Student) {

    //     this.students.push({
    //         name: student.name,
    //         imgUrl: student.imgUrl,
    //         contactNo: student.contactNo,
    //         email: student.email,
    //         address: student.address,
    //         year: student.year,
    //         stream: student.stream,
    //         graduateYear: student.graduateYear

    //     });
    //     console.log(this.students.length);
    //     this.studentsUpdated.next([...this.students]);
    // }

    // updateStudents(index: number, student: Student) {
    //     console.log("edited");

    // }

    // uploadImage(file: File) {
    //     console.log("compiled");

    // }

    // deleteStudent(id: number) {

    //     this.students.splice(id, 1);
    //     this.studentsUpdated.next(this.students.slice());

    // }


}

