import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  employee = this.http.get<Employee[]>('/api/employee');
  public addEmployee(newEmployee: Employee): void {
    this.employee = this.http.post<Employee[]>('/api/adduser', newEmployee);
  }
}
