import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './classes/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  employee = this.http.get<Employee[]>('/api/employee');
  public addEmployee(newEmployee: Employee) {
    return this.http.post<Employee[]>('/api/adduser', newEmployee);
  }
}
