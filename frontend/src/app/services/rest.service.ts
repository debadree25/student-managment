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
    const url = `${this.baseUrl}students/create`;
    return this.http.post<ServerResponse<Student>>(url, student).toPromise();
  }

  public getStudentById(id: number){
    const index=id.toString();
    const url = `${this.baseUrl}students/:${index}`;
   //console.log(url)
   return this.http.get<ServerResponse<Student>>(url);
    }
  
  
}
