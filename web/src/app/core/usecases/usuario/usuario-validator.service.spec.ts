import { TestBed } from '@angular/core/testing';

import { UsuarioValidatorService } from './usuario-validator.service';

describe('UsuarioValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioValidatorService = TestBed.get(UsuarioValidatorService);
    expect(service).toBeTruthy();
  });
});
