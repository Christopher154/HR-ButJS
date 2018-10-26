import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public newEmployee: Employee;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  addEmployee(addForm): void {
    if (addForm.valid) {
      var employeeToAdd = this.newEmployee;
      this.newEmployee = new Employee();
      this.data.addEmployee(employeeToAdd);
    } else {
      console.error("Add Employee form is in an invalid state.");
    }
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }
}
