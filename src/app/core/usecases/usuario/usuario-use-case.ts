import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { IUsuarioUseCase } from '../../interfaces/usecases/iusuario-use-case';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { UsuarioModel } from '../../domain/entity/usuario-model';
import { IUsuarioRepository } from '../../interfaces/repository/iusuario-repository';
import { IUsuarioValidator } from '../../interfaces/validations/iusuario-validator';

@Injectable({
  providedIn: 'root'
})
export class UsuarioUseCase implements IUsuarioUseCase {

  constructor(
    private usuarioRepository: IUsuarioRepository,
    private usuarioValidator: IUsuarioValidator
  ) { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    const validator = this.usuarioValidator.validateFields(param);

    if (validator.IsValid) {
      return this.usuarioRepository.login(param);
    } else {
      return throwError(validator.Errors);
    }
  }

  logout(): Observable<boolean> {
    return this.usuarioRepository.logout();
  }


}
