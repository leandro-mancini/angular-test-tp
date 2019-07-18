import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { MotoristaUsecaseService } from 'src/app/core/usecases/motorista/motorista-usecase.service';

@Injectable({
  providedIn: 'root'
})
export class MotoristaControllerService implements IMotoristaController {

  constructor(
    private motoristaUsecase: MotoristaUsecaseService
  ) { }

  get(id?: number): Observable<MotoristaModel> {
    if (id) {
      return this.motoristaUsecase.get(id);
    } else {
      return this.motoristaUsecase.get();
    }
  }
  insert(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaUsecase.insert(param);
  }
  update(param: MotoristaModel): Observable<MotoristaModel> {
    return this.motoristaUsecase.update(param);
  }
  delete(id: number): Observable<boolean> {
    return this.motoristaUsecase.delete(id);
  }

}
