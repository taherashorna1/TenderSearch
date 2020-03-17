/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendDataService } from './sendData.service';

describe('Service: SendData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendDataService]
    });
  });

  it('should ...', inject([SendDataService], (service: SendDataService) => {
    expect(service).toBeTruthy();
  }));
});
