import 'package:truckpad/src/app/domain/request/usuario_request.dart';

abstract class IUsuarioRepository {
  Future login(UsuarioRequest param);
  Future logout();
}
