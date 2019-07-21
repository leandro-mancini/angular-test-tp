import { ValidationResult } from 'ts.validator.fluent/dist';

import { UsuarioRequest } from 'src/app/data/request/usuario-request';

export abstract class IUsuarioValidator {
  abstract validateFields(param: UsuarioRequest): ValidationResult;
}
