import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { Employee } from "../classes/employee";

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
      this.data.addEmployee(this.newEmployee).subscribe(resp => {
        this.newEmployee.id = resp.id;
        console.log(this.newEmployee);
      });
    } else {
      console.error("Add Employee from is in an invalid state.");
    }
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }
}
