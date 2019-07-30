#language: pt

Funcionalidade: Autenticar usuario

    Cenário: Login
        Dado que estou na página inicial 'Login'
        Quando devo preencher o usuario 'truckpad'
        Quando devo preencher a senha '123'
        E devo clicar no botão 'Entrar'
        Então sou redirecionado para a página 'Home'

    Cenário: Logout
        Dado que eu estou na página 'Home'
        Quando devo clicar no botão perfil
        E devo clicar no botão logout 'Sair'
        Então sou redirecionado para a página 'Login'
