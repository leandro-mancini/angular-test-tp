import { TestBed } from '@angular/core/testing';

import { MotoristaControllerService } from './motorista-controller.service';
import { IMotoristaUsecase } from '../../../core/interfaces/usecases/imotorista-usecase';
import { MotoristaModel } from '../../../core/domain/entity/motorista-model';

describe('MotoristaControllerService:', () => {
  let motoristaController: MotoristaControllerService;
  let valueSpy: jasmine.SpyObj<IMotoristaUsecase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IUsuarioUseCase', ['get', 'insert', 'update', 'disableEnable']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IMotoristaUsecase, useValue: spy }
      ]
    });

    valueSpy = TestBed.get(IMotoristaUsecase);
    motoristaController = TestBed.get(MotoristaControllerService);
  });

  xit('deve ser criado', () => {
    expect(motoristaController).toBeTruthy();
  });

  xit('deve chamar o metodo get() passando um ID', () => {
    const id = 1;

    motoristaController.get(id);

    expect(valueSpy.get.calls.count()).toBe(1);
  });

  xit('deve chamar o metodo get() sem passar um ID', () => {
    motoristaController.get();

    expect(valueSpy.get.calls.count()).toBe(1);
  });

  xit('deve chamar o metodo insert()', () => {
    const motorista = new MotoristaModel();

    motoristaController.insert(motorista);

    expect(valueSpy.insert.calls.count()).toBe(1);
  });

  xit('deve chamar o metodo update()', () => {
    const motorista = new MotoristaModel();

    motoristaController.update(motorista);

    expect(valueSpy.update.calls.count()).toBe(1);
  });

  xit('deve chamar o metodo disableEnable()', () => {
    const id = 1;
    const status = true;

    motoristaController.disableEnable(id, status);

    expect(valueSpy.disableEnable.calls.count()).toBe(1);
  });
});
