import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { CourseType } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<CourseType[]>(this.API)
      .pipe(
        first(),
        delay(2000),
        tap(courses => console.log(courses))
      );
  }
}
