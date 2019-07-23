import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:truckpad/src/app/domain/entity/usuario_entity.dart';

import 'package:truckpad/src/app/domain/request/usuario_request.dart';
import 'package:truckpad/src/app/interfaces/repository/iusuario_repository.dart';

class UsuarioRepository implements IUsuarioRepository {

  final String baseUrl = 'https://my-json-server.typicode.com/leandro-mancini/angular-test-tp/';

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
        List<dynamic> res = json.decode(uriResponse.body);

        if (res.length > 0) {
          return new UsuarioEntity.fromJson(res[0]);
        }
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