import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee';
import { EmployeeSerService } from '../../_services/employeeSer.service';
import { EmployeeWithId } from 'src/app/_models/employeeWithId';
import { SendDataService } from 'src/app/_services/sendData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeWithId[];
  message: string;
  id: Number;
  
  constructor(private employeeService: EmployeeSerService, private data: SendDataService, private router: Router) { }

  ngOnInit() {
    this.loadEmployee();
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  viewEmployee(e){
    console.log(e)
    this.data.changeMessage(e);
    this.router.navigate(['view']);
  }

  editEmployee(e){
    console.log(typeof(e))
    this.data.changeMessage(e);
    this.router.navigate(['update']);
  }


  loadEmployee() {
    this.employeeService.getEmployees().subscribe((emp: EmployeeWithId[]) =>{
      this.employees = emp;
      console.log(this.employees)
    }, error => {
        console.log(error);
    });
  }

  deleteEmployee(e) {
    this.id = e;
    console.log(typeof(this.id));
    this.employeeService.deleteEmployee(this.id);
    this.router.navigate(['']);
  }

}
