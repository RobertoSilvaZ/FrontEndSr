import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
  }));

  it('Service created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('Function save working', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.save).toBeTruthy();
  });

  it('Function info working', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.info).toBeTruthy();
  });
});
