import 'addresses_entity.dart';
import 'documents_entity.dart';

class MotoristaEntity {
  int id;
  String name;
  String birth_date;
  String phone;
  String state;
  String city;
  bool enable;
  AddressesEntity addresses;
  List<DocumentsEntity> documents;

  MotoristaEntity({
    this.id,
    this.name,
    this.birth_date,
    this.phone,
    this.state,
    this.city,
    this.enable,
    this.addresses,
    this.documents
  });

  factory MotoristaEntity.fromJson(Map<String, dynamic> json) {
    return MotoristaEntity(
      id: json['id'],
      name: json['name'],
      birth_date: json['birth_date'],
      phone: json['phone'],
      state: json['state'],
      city: json['city'],
      enable: json['enable'],
      addresses: json['addresses'],
      documents: json['documents']
    );
  }
}