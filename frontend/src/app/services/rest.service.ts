import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { ServerResponse } from '../models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  public getAllStudents(): Promise<ServerResponse<Student[]>> {
    const url = `${this.baseUrl}students`;
    return this.http.get<ServerResponse<Student[]>>(url).toPromise();
  }

  public addStudent(student: Student): Promise<ServerResponse<Student>> {
    // const postData = new FormData();
    // postData.append('name', student.name);
    // postData.append('department', student.department);
    // postData.append('year', student.year);
    // postData.append('passing_year', student.passing_year);
    // postData.append('address', student.address);
    // postData.append('joining_year', student.joining_year);
    // postData.append('phone', student.phone.toString());
    // postData.append('image', student.image,student.name);
    // postData.append('email', student.email);
    // console.log(postData)

    const url = `${this.baseUrl}students/create`;
    return this.http.post<ServerResponse<Student>>(url,student).toPromise();
  }

  public getStudentById(id: string): Promise<ServerResponse<Student>> {
    const url = `${this.baseUrl}students/${id}`;
    return this.http.get<ServerResponse<Student>>(url).toPromise();
  }
}
