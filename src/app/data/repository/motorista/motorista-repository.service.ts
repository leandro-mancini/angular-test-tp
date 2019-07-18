import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMotoristaRepository } from 'src/app/core/interfaces/repository/imotorista-repository';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';

@Injectable({
  providedIn: 'root'
})
export class MotoristaRepositoryService implements IMotoristaRepository {

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
