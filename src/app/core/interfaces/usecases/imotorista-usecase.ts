import { Observable } from 'rxjs';
import { MotoristaModel } from '../../domain/entity/motorista-model';

export abstract class IMotoristaUsecase {
  abstract get(id?: number): Observable<MotoristaModel>;
  abstract insert(param: MotoristaModel): Observable<MotoristaModel>;
  abstract update(param: MotoristaModel): Observable<MotoristaModel>;
  abstract delete(id: number): Observable<boolean>;
}
