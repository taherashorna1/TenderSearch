import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeSerService } from 'src/app/_services/employeeSer.service';
import { EmployeeWithId } from 'src/app/_models/employeeWithId';
import { SendDataService } from 'src/app/_services/sendData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: EmployeeWithId;
  message: number;
  constructor(private employeeService: EmployeeSerService,private data: SendDataService, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      console.log(message); 
      this.employeeService.getEmployee(parseInt(message)).subscribe(e => { 
        this.employee = e;
      });
    });
  }

  updateEmployee() {
    console.log(this.employee.status);
    this.employeeService.updateEmployee(this.employee.id, this.employee);
    this.router.navigate(['']);
  }
  testfunc()
{
  console.log(this.employee.status);
}
}
