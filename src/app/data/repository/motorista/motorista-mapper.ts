import { Mapper } from '../../base/mapper';
import { MotoristaEntity } from './motorista-entity';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
export class MotoristaMapper implements Mapper<MotoristaEntity, MotoristaModel> {
  mapFrom(param: MotoristaEntity): MotoristaModel {
    throw new Error("Method not implemented.");
  }
}
