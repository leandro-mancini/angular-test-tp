class AddressesEntity {
  int id;
  String name;
  String state;
  String country;
  String neighborhood;
  String city;
  String street_number;
  String complement;
  String postal_code;
  String street_name;

  AddressesEntity({
    this.id,
    this.name,
    this.state,
    this.country,
    this.neighborhood,
    this.city,
    this.street_number,
    this.complement,
    this.postal_code,
    this.street_name
  });

  factory AddressesEntity.fromJson(Map<String, dynamic> json) {
    return AddressesEntity(
      id: json['id'],
      name: json['name'],
      state: json['name'],
      country: json['country'],
      neighborhood: json['neighborhood'],
      city: json['city'],
      street_number: json['street_number'],
      complement: json['complement'],
      postal_code: json['postal_code'],
      street_name: json['street_name']
    );
  }
}