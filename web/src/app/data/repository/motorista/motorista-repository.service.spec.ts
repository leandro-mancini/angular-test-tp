import { TestBed } from '@angular/core/testing';

import { MotoristaRepositoryService } from './motorista-repository.service';

describe('MotoristaRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: MotoristaRepositoryService = TestBed.get(MotoristaRepositoryService);
    expect(service).toBeTruthy();
  });
});
