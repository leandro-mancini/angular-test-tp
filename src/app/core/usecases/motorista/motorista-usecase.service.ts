import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMotoristaUsecase } from '../../interfaces/usecases/imotorista-usecase';
import { MotoristaModel } from '../../domain/entity/motorista-model';

@Injectable({
  providedIn: 'root'
})
export class MotoristaUsecaseService implements IMotoristaUsecase {

  constructor() { }

  get(id?: number): Observable<MotoristaModel> {
    throw new Error("Method not implemented.");
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    throw new Error("Method not implemented.");
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Observable<boolean> {
    throw new Error("Method not implemented.");
  }

}
