import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
  ]
  }));

  it('Service created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });

  it('Function create data working', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service.createData).toBeTruthy();
  });
});