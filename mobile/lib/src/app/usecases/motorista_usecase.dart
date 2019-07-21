import 'package:truckpad/src/app/domain/entity/motorista_entity.dart';
import 'package:truckpad/src/app/interfaces/usecases/imotorista_usecase.dart';
import 'package:truckpad/src/data/repository/motorista_repository.dart';

class MotoristaUsecase implements IMotoristaUsecase {

  MotoristaRepository motoristaRepository = new MotoristaRepository();

  @override
  disableEnable(int id, bool status) {
    return this.motoristaRepository.disableEnable(id, status);
  }

  @override
  get(int id) {
    return this.motoristaRepository.get(id);
  }

  @override
  insert(MotoristaEntity param) {
    this.motoristaRepository.insert(param);
  }

  @override
  update(MotoristaEntity param) {
    this.motoristaRepository.update(param);
  }

}