# App

GymPass style app.

`docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest`

## Patterns

- Repository Pattern.

- SOLID:

S:

O:

L:

I:

D: Dependency Inversion Principle (DIP)

## Dev

Para levantar mais rapidamente, rode:

`./startup.sh`

### Server

`bun dev`

### Database

`docker compose up -d`

## Build

`bun run build`

### Entidades (keywords) a serem persistidas

Usuário, academia, check-in.

## RFs (Requisitos funcionais)

Funcionalidades da aplicação: o que o usuário consegue fazer usando a mesma? Porém, não envolve como será feito.

A idéia é: existem várias formas de se implementar uma funcionalidade.

"Deve ser possível X".

- [ ] Deve ser possível se cadastrar (criar um sistema de cadastro do zero, login, entender como funciona o armazenamento de sessão do usuário, como reconhecer o usuário perante as requisições que ele faz no backend, login com email, senha e criptografia, etc.);

- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

Caminhos que cada requisito pode tomar, quais condições são necessárias para que uma funcionalidade seja aplicável.

Por exemplo: se um requisito funcional é "fazer check-in", a regra de negócio seria "apenas quando estivesse a 100m da academia desejada".

Sempre será relacionada ao requisito funcional.

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

Não impactam o cliente, direcionados ao nível mais técnico; é onde são definidos qual banco de dados será utilizado, qual estratégia é mais apropriada para o cache da aplicação, etc.

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por páginaç
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);