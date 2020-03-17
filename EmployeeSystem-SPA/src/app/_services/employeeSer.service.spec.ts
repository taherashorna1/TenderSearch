/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeSerService } from './employeeSer.service';

describe('Service: EmployeeSer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeSerService]
    });
  });

  it('should ...', inject([EmployeeSerService], (service: EmployeeSerService) => {
    expect(service).toBeTruthy();
  }));
});
