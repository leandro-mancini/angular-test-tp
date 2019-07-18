import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMotoristaUsecase } from '../../interfaces/usecases/imotorista-usecase';
import { MotoristaModel } from '../../domain/entity/motorista-model';
import { IMotoristaRepository } from '../../interfaces/repository/imotorista-repository';

@Injectable({
  providedIn: 'root'
})
export class MotoristaUsecaseService implements IMotoristaUsecase {

  constructor(
    private motoristaRepository: IMotoristaRepository
  ) { }

  get(id?: number): Observable<MotoristaModel> {
    if (id) {
      return this.motoristaRepository.get(id);
    } else {
      return this.motoristaRepository.get();
    }
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaRepository.insert(param);
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaRepository.update(param);
  }
  delete(id: number): Observable<boolean> {
    return this.motoristaRepository.delete(id);
  }

}
