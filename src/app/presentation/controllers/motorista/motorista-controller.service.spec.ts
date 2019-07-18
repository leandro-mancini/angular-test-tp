import { TestBed } from '@angular/core/testing';

import { MotoristaControllerService } from './motorista-controller.service';

describe('MotoristaControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotoristaControllerService = TestBed.get(MotoristaControllerService);
    expect(service).toBeTruthy();
  });
});
