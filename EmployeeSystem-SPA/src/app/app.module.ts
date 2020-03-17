import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeSerService } from './_services/employeeSer.service';
import { EmployeeListComponent } from './employees/employee-list/employeeList.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit/employee-edit.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEmployeeComponent } from './employees/create-employee/createEmployee.component';
import { CommonModule } from '@angular/common';
import { SendDataService } from './_services/sendData.service';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      EmployeeListComponent,
      EmployeeEditComponent,
      CreateEmployeeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes, {useHash: true})
   ],
   providers: [
      EmployeeSerService,
      SendDataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
