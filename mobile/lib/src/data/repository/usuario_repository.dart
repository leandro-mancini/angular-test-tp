import 'dart:convert';
import 'package:http/http.dart' as http;

import 'package:truckpad/src/app/domain/request/usuario_request.dart';
import 'package:truckpad/src/app/interfaces/repository/iusuario_repository.dart';

class UsuarioRepository implements IUsuarioRepository {

  final String baseUrl = 'http://localhost:3000';

  @override
  Future login(UsuarioRequest param) async {
    final client = http.Client();
    final uriResponse = await client.get(
      baseUrl + '/usuarios?username=' + param.username + '&password=' + param.password + ''
    );

    final int statusCode = uriResponse.statusCode;

    if (statusCode < 200 || statusCode > 400) {
      throw new Exception('Erro ao buscar dados');
    } else {
      if (statusCode == 200) {
        var res = json.decode(uriResponse.body);

        print(uriResponse.body);
      }
    }

    return null;
  }

  @override
  Future logout() {
    // TODO: implement logout
    return null;
  }

}