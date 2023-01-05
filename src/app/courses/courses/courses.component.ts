import { CoursesService } from './../services/courses.service';
import { CourseType } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseType[] = [];
  displayedColumns: string[] = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService()
    // this.courses = []
    // this.courses = this.coursesService.list()
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list()
  }
}
