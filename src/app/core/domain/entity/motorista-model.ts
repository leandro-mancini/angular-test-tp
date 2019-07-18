import { DomainModel } from './base/domain-model';
import { AddressesModel } from './addresses-model';
import { DocumentsModel } from './documents-model';

export class MotoristaModel extends DomainModel {
  name: string;
  birth_date: Date;
  state: string;
  city: string;
  addresses: AddressesModel;
  documents: DocumentsModel[];
}
