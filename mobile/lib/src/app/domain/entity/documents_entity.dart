class DocumentsEntity {
  int id;
  String expires_at;
  String country;
  String number;
  String doc_type;
  String category;

  DocumentsEntity({
    this.id,
    this.expires_at,
    this.country,
    this.number,
    this.doc_type,
    this.category
  });

  factory DocumentsEntity.fromJson(Map<String, dynamic> json) {
    return DocumentsEntity(
      id: json['id'],
      expires_at: json['expires_at'],
      country: json['country'],
      number: json['number'],
      doc_type: json['doc_type'],
      category: json['category']
    );
  }
}