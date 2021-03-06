import 'package:truckpad/src/app/domain/entity/motorista_entity.dart';

abstract class IMotoristaRepository {
  get(int id);
  insert(MotoristaEntity param);
  update(MotoristaEntity param);
  disableEnable(int id, bool status);
}