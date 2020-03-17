import { Component, OnInit } from '@angular/core';
import { EmployeeWithId } from 'src/app/_models/employeeWithId';
import { EmployeeSerService } from 'src/app/_services/employeeSer.service';
import { SendDataService } from 'src/app/_services/sendData.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  message: number;
  employee: EmployeeWithId;
  constructor(private employeeService: EmployeeSerService, private data: SendDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      console.log(message); 
      this.employeeService.getEmployee(parseInt(message)).subscribe(e =>{ 
        this.employee = e;
      });
    });
  }



}
