import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  students!: Student[];
  selected: number = -1;
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

  // Update selected student when selected in dropdown
  update(event: Event) { 
    if(event.target != null) {
      const target = event.target as HTMLButtonElement;
      this.selected = Number(target.value);
      console.log(this.selected)
    }
  } 

  // Change a student and get updated student list
  updateStudent() {
    if(this.firstName != '' && this.lastName != '') {   // If first and last name aren't empty
      var student = new Student(this.firstName, this.lastName);   // Make a new student object
      student.id = this.selected;
      this.studentService.update(student).subscribe(data => {     // Update student
        this.studentService.findAll().subscribe(data => {         // Update student table
          this.students = data;
        });
      });
    }
  }

  // Delete a student and get updated student list
  deleteStudent() {
    this.studentService.delete(this.selected).subscribe(data => {     // Delete student
      this.studentService.findAll().subscribe(data => {               // Update student table
        this.students = data;
      });
    });
  }
}
