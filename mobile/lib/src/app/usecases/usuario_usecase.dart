import 'package:truckpad/src/app/domain/request/usuario_request.dart';
import 'package:truckpad/src/app/interfaces/usecases/iusuario_usecase.dart';
import 'package:truckpad/src/data/repository/usuario_repository.dart';

class UsuarioUseCase implements IUsuarioUseCase {

  UsuarioRepository usuarioRepository = new UsuarioRepository();

  @override
  Future login(UsuarioRequest param) {
    return this.usuarioRepository.login(param);
  }

  @override
  Future logout() {
    return this.usuarioRepository.logout();
  }

}