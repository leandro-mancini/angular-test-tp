import { DomainModel } from './base/domain-model';
export class UsuarioModel extends DomainModel {
  username: string = null;
  email: string = null;
  token: string = null;
}
