import 'package:truckpad/src/app/domain/request/usuario_request.dart';

abstract class IUsuarioUseCase {
  Future login(UsuarioRequest param);
  Future logout();
}