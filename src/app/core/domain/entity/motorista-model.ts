import { DomainModel } from './base/domain-model';
import { AddressesModel } from './addresses-model';
import { DocumentsModel } from './documents-model';

export class MotoristaModel extends DomainModel {
  name: string = null;
  birth_date: Date = null;
  state: string = null;
  city: string = null;
  addresses: AddressesModel = null;
  documents: DocumentsModel[] = null;
}
