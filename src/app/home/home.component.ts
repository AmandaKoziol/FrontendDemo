import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students!: Student[];
  firstName: string = '';
  lastName: string = '';

  // Instantiates student service object
  constructor(private studentService: StudentService) {
  }

  // When the page is initialized, get all students from student service
  ngOnInit() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

  // Add a student and get updated student list
  addStudent() {
    if(this.firstName != '' && this.lastName != '') {   // If first and last name aren't empty
      var student = new Student(this.firstName, this.lastName); // Make a new student object
      this.studentService.add(student).subscribe(data => {      // Add new student
        this.studentService.findAll().subscribe(data => {       // Update student table
          this.students = data;
        });
      });
    }
  }
}
