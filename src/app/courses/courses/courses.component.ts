import { CourseType } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses: CourseType[] = [
    { _id: '1', name: 'Angular', category: 'FrontEnd' },
    { _id: '2', name: 'Spring', category: 'BackEnd' }
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {
    // this.courses = []
  }

  ngOnInit(): void {

  }
}
