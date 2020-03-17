import {Routes} from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employeeList.component';
import { CreateEmployeeComponent } from './employees/create-employee/createEmployee.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit/employee-edit.component';

export const appRoutes: Routes = [
    {path: '', component: EmployeeListComponent},
    {path: 'create', component: CreateEmployeeComponent},
    {path: 'view', component: ViewEmployeeComponent},
    {path: 'update', component: EmployeeEditComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
