FLUXO:

CLIENT (requisitando) | middleware | controller | service | respository (prisma)

respository (prisma) | service | controller | CLIENT (requisitando)

1- Middleware: Validação de dados, EX: string menor que...

2- Controller: Recebe os dados, chama o service e de acordo com o que o service responder, devolver ao usuário.

3- Service: Ë quem se conecta com o banco (respository) e devolve essa informação ao controller.

4- Repository (prisma): Instância do prisma client.

---

Criação dos criminosos...

Criação das armas....

Criação e listagem dos crimes....
