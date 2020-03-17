import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from 'src/app/_services/employeeSer.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/_models/employee';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './createEmployee.component.html',
  styleUrls: ['./createEmployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee: Employee = {

    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    mobile: '',
    status: true
    };
  constructor(private employeeService: EmployeeSerService) {
  }

  ngOnInit() {
    //this.createEmployee();
  }

  createEmployee() { 
    this.employeeService.createEmployee(this.employee).subscribe(e => console.log(e));
  }

}
