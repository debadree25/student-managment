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

  public addStudent(student: Student, file: File): Promise<ServerResponse<Student>> {
    const postData = new FormData();
    Object.keys(student).forEach((key) => {
      postData.append(key, student[key]);
    });
    postData.append('student-image', file, file.name);
    // postData.append('image', student.image,student.name);
    // postData.append('email', student.email);
    console.log(postData);

    const url = `${this.baseUrl}students/create`;
    return this.http.post<ServerResponse<Student>>(url, postData).toPromise();
  }

  public getStudentById(id: string): Promise<ServerResponse<Student>> {
    const url = `${this.baseUrl}students/${id}`;
    return this.http.get<ServerResponse<Student>>(url).toPromise();
  }

  public downloadImage(imageId: string): Promise<Blob> {
    const url = `${this.baseUrl}images/${imageId}`;
    return this.http.get(url, {responseType: 'blob'}).toPromise();
  }
}
