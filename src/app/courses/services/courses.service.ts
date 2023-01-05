import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseType } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }


  list(): CourseType[] {
    return [{ _id: '1', name: 'Angular', category: 'FrontEnd' },
    { _id: '2', name: 'Spring', category: 'BackEnd' }]
  }

}
