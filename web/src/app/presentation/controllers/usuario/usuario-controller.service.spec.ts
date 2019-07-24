import { TestBed } from '@angular/core/testing';

import { UsuarioControllerService } from './usuario-controller.service';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { IUsuarioUseCase } from 'src/app/core/interfaces/usecases/iusuario-use-case';

describe('UsuarioControllerService', () => {
  let usuarioController: UsuarioControllerService;
  let usuarioUseCase: jasmine.SpyObj<IUsuarioUseCase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IUsuarioUseCase', ['login', 'logout']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IUsuarioUseCase, useValue: spy }
      ]
    });

    usuarioUseCase = TestBed.get(IUsuarioUseCase);
    usuarioController = TestBed.get(UsuarioControllerService);
  });

  it('deve ser criado', () => {
    expect(usuarioController).toBeTruthy();
  });

  it('deve chamar o metodo login', () => {
    const mock = {
      username: 'truckpad',
      password: '123'
    };

    usuarioController.login(mock);

    expect(usuarioUseCase.login.calls.count()).toBe(1);
  });

  it('deve chamar o metodo logout', () => {
    usuarioController.logout();

    expect(usuarioUseCase.logout.calls.count()).toBe(1);
  });
});
