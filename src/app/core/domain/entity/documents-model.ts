import { DomainModel } from './base/domain-model';

export class DocumentsModel extends DomainModel {
  expires_at: Date;
  country: string;
  number: string;
  doc_type: string;
  category: string;
}
