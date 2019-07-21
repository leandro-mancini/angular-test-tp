class UsuarioRequest {
  String username;
  String password;

  UsuarioRequest({
    this.username,
    this.password
  });

  factory UsuarioRequest.fromJson(Map<String, dynamic> json) {
    return UsuarioRequest(
      username: json['username'],
      password: json['password']
    );
  }
}