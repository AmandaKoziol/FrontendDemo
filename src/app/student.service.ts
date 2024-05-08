import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../app/student';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StudentService {

  // Hold the URL for communicating with the backend
  private studentUrl: string;

  // Instantiates the backend URL to communicate with the backend
  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/students';
  }

  // Get call to the backend to get all students
  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }
  
  // Post call to the backend to add a student
  public add(student: Student) {
    return this.http.post<Response>(this.studentUrl, student);
  }

  // Put call to the backend to update/change a student
  public update(student: Student) {
    var updateUrl: string = this.studentUrl.concat("/",student.id.toString()) // Pass student id param in URL
    return this.http.put<Response>(updateUrl, student);
  }

  // Delete call to the backend to delete a student
  public delete(id: number) {
    var deleteUrl: string = this.studentUrl.concat("/",id.toString()) // Pass student id param in URL
    return this.http.delete<Response>(deleteUrl);
  }
}
