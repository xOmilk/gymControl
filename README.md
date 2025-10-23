# Gym Control API

- RFs
    - [ ] Deve ser possivel se cadastrar
    - [ ] Deve ser possivel se autenticar
    - [ ] Deve ser possivel obter o perfil de um usuario logado
    - [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuário logado
    - [ ] Deve ser possivel o usuario obter seu histórico de check-ins
    - [ ] Deve ser possivel o usuario buscar academias proximas
    - [ ] Deve ser possivel o usuario buscar academias pelo nome
    - [ ] Deve ser possivel o usuario realizar check-in em uma academia
    - [ ] Deve ser possivel validar o check-in de um usuario
    - [ ] Deve ser possivel cadastrar uma academia

- RNs

    - [  ] O usuario não deve poder se cadastrar com um e-mail duplicado
    - [  ] O usuario não pode fazer dois check-ins no mesmo dia
    - [  ] O usuario não pode fazer check-in se nao estiver pelo menos 100m da academia
    - [  ] O check-in só pode ser validado até 20 minutos após criado
    - [  ] O check-in só pode ser validado por administradores
    - [  ] A academia só pode ser cadastrada por administradores


- RNFs

    - [ ] A senha do usuario precisa estar criptografada
    - [ ] Os dados da aplicação precisam estar persistido em um banco PostgreSQL
    - [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página
    - [ ] O usuario deve ser identificado por um JWT