import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { IUsuarioUseCase } from 'src/app/core/interfaces/usecases/iusuario-use-case';
import { IUsuarioController } from 'src/app/core/interfaces/controllers/iusuario-controller';
import { UsuarioRequest } from 'src/app/data/request/usuario-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioControllerService implements IUsuarioController {

  constructor(
    private usuarioUseCase: IUsuarioUseCase
  ) { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return this.usuarioUseCase.login(param);
  }
  logout(): Observable<boolean> {
    return this.usuarioUseCase.logout();
  }
}
