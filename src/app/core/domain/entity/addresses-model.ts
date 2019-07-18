import { DomainModel } from './base/domain-model';

export class AddressesModel extends DomainModel {
  name: string;
  state: string;
  country: string;
  neighborhood: string;

  city: string;
  street_number: number;
  complement: string;
  postal_code: string;
  street_name: string;
}
