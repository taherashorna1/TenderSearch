import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { EmployeeWithId } from '../_models/employeeWithId';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSerService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeeWithId[]> {
      return this.http.get<EmployeeWithId[]>(this.baseUrl + 'employees');
  }

  getEmployee(id): Observable<EmployeeWithId> {
    return this.http.get<EmployeeWithId>(this.baseUrl + 'employees/' + id);
  }

  createEmployee(emp){
    return this.http.post<Employee>(this.baseUrl + 'employees/create', emp);
  }

  updateEmployee(id, emp){
    console.log(id, emp);
    return this.http.put(this.baseUrl + 'employees/' + id, emp).subscribe((data)=> {console.log("success");});
  }

  deleteEmployee(id: Number) {
    console.log(id);
    console.log(this.baseUrl + 'employees/'+ id);
    this.http.delete(this.baseUrl + 'employees/' + id).subscribe((data) => {
      console.log("success");
      this.getEmployees();
  });
  }

}
