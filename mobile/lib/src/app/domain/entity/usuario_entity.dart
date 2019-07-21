class UsuarioEntity {
  int id;
  String username;
  String email;
  String token;

  UsuarioEntity({
    this.id,
    this.username,
    this.email,
    this.token
  });

  factory UsuarioEntity.fromJson(Map<String, dynamic> json) {
    return UsuarioEntity(
      id: json['id'],
      username: json['username'],
      email: json['email'],
      token: json['token']
    );
  }
}