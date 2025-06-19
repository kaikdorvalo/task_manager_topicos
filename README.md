# Trabalho 2 bimestre
Neste trabalho, foi desenvolviedo uma api em Nestjs que possui as seguinte funcionalidades:

1. Criação de usuários
2. Utilização de permissões (roles) para cada usuário
3. Autenticação com JWT para as requisições
4. Encriptação de senha por meio do algoritmo de hash bcrypt
5. Criação de um usuário administrador
6. Criação de usuários comuns
7. Criação de tarefas
8. deletar tarefas
9. buscar tarefas
10. atualizar tarefas

# Como rodar o trabalho

1. Intale o postgresql
2. clone o repositório e instale as depêndencias com `npm install`
3. Coloque os dados de acesso do postgresql no .env da raíz do projeto
4. Crie manualmente o database `topicos` (as tabelas serão carregas ao niciar o projeto)
5. inicie o servidor com `npm run start:dev`

Deixei na raíz do projeto um arquivo para postman com todas as rotas e body já feito, basta importar no postman
O arquivo é o `7topicos.postman_collection.json`

#Rotas

http://localhost:3000/users/adm_gen
`POST`
* Rota sem body apenas para criar o usuário admin

http://localhost:3000/auth/signin
`POST`
`
{
    "email": "admin@gmail.com",
    "password": "123"
}
`
* Essa rota faz o login do usuário admin que foi criado

http://localhost:3000/users/create
`POST`
`
{
    "name": "Kaik Santos",
    "email": "kaik@gmail.com",
    "password": "kaik123456",
    "role": "user"
}
`
* Essa rota cria um usuário. Somente um usuário com role de admin consegue criar usuários

http://localhost:3000/task
`POST`
`
{
    "name": "task boa3 ",
    "completed": false
}
`
* Essa rota cria uma task

http://localhost:3000/task
`GET`
* Essa rota busca todas as tasks criadas

http://localhost:3000/task/:id
`DELETE`
* Essa rota deleta uma task passando o id da task na url

http://localhost:3000/task
`PUT`
`
{
    "id": "6a1748cd-5768-433a-8c23-7a506364d89d",
    "name": "aviao",
    "completed": true
}
`
* Essa rota faz update em uma task



