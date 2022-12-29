import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  public fetchCourses(){
    return this.http.get('https://63ad75e8da81ba97619db751.mockapi.io/api/v1/course');
  }
}
