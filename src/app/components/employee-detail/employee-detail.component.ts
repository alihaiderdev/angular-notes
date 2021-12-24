import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: ` <h5>Employee Detail List</h5>
    <ul style="margin: 0;" *ngFor="let employee of employees; index as i">
      <li>{{ employee.id }} - {{ employee.name }} - {{ employee.age }}</li>
    </ul>`,
  styles: [``],
})
export class EmployeeDetailComponent implements OnInit {
  // employees = [
  //   { id: 1, name: 'Ali Haider', age: 23 },
  //   { id: 2, name: 'Arfeen', age: 25 },
  //   { id: 3, name: 'Arsalan', age: 26 },
  //   { id: 4, name: 'Kulsoom', age: 27 },
  //   { id: 5, name: 'Zohaib', age: 24 },
  //   { id: 6, name: 'Talha', age: 19 },
  // ];
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) {}
  // ngOnInit(): void {
  //   this.employees = this._employeeService.getEmployees();
  // }

  // Fetch Data Using HTTP Code
  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }
}
