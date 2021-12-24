import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// if our service have also another service or dependency then we use Injectable decorator so its a best practice that when we create a service we use declare or use injectable decorator
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = '/assets/data/employees.json';
  constructor(private http: HttpClient) {}
  // getEmployees() {
  //   return [
  //     { id: 1, name: 'Ali Haider', age: 23 },
  //     { id: 2, name: 'Arfeen', age: 25 },
  //     { id: 3, name: 'Arsalan', age: 26 },
  //     { id: 4, name: 'Kulsoom', age: 27 },
  //     { id: 5, name: 'Zohaib', age: 24 },
  //     { id: 6, name: 'Talha', age: 19 },
  //   ];
  // }

  // by using this  Observable<Employee[]> we cast observable in array of object
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
