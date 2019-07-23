class UsuarioValidation {
  String validateField(String value) {
    if (value.length == 0) {
      return 'Campo obrigatório.';
    }

    return null;
  }
}