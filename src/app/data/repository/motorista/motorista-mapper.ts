import * as automapper from 'automapper-ts';

import { Mapper } from '../../base/mapper';
import { MotoristaEntity } from './motorista-entity';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
export class MotoristaMapper implements Mapper<MotoristaEntity, MotoristaModel> {
  mapFrom(param: MotoristaEntity): MotoristaModel {
    automapper.createMap('MotoristaModel', MotoristaModel);

    return automapper.map('MotoristaModel', MotoristaModel, param);
  }
}
