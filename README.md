# API_REST CRUD

Trabalho de Recuperação – Desenvolvimento Web | Bianca Ferreira Morais

1. Descrição do Projeto:
Este projeto é uma API REST simples para gerenciar uma lista de tarefas (To-do list). A API foi desenvolvida em Node.js usando o framework Express. As tarefas são armazenadas em memória, sem a necessidade de um banco de dados. O projeto inclui as quatro operações básicas de CRUD: Criar, Ler, Atualizar e Excluir. A comunicação entre o cliente e o servidor é feita via JSON.


2. Pré-requisitos:
Para rodar esta aplicação, você precisa do:
Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu computador.


3. Instruções para Instalar as Dependências:
Após baixar o projeto, abra o terminal na pasta raiz do projeto. Execute o comando abaixo para instalar todas as dependências necessárias (Express, Nodemon e Dotenv):

npm install


4. Comando para Iniciar o Servidor:
Para iniciar o servidor em modo de desenvolvimento, use o comando:

npm run dev

O Nodemon será usado para monitorar as alterações e reiniciar o servidor automaticamente. Você verá uma mensagem no terminal informando que o servidor está rodando na porta 3000.


5. Rotas da API:
As seguintes rotas estão disponíveis para gerenciar as tarefas:

POST /tarefas: Cria uma nova tarefa.

GET /tarefas: Lista todas as tarefas.

PUT /tarefas/:id: Atualiza uma tarefa existente pelo seu ID.

DELETE /tarefas/:id: Exclui uma tarefa existente pelo seu ID.


6. Exemplo de JSON para uso:
Para as requisições POST e PUT, você deve enviar um corpo JSON. Aqui estão exemplos de como o JSON deve ser estruturado:

Para criar uma nova tarefa (POST):

JSON

{
  "title": "Aprender a usar o Express"
}


Para atualizar uma tarefa (PUT):

JSON

{
  "title": "Configurar o servidor Express",
  "completed": true
}


7. Como testar no Postman:

Para testar as rotas da API, você pode usar a ferramenta Postman.

- Abra o Postman e crie uma nova requisição.

- Defina o método (GET, POST, PUT, DELETE) e a URL da rota desejada (http://localhost:3000/tarefas).

- Para as requisições POST e PUT, adicione um Body no formato raw e JSON com os dados necessários.

- Clique em "Send" para enviar a requisição e ver a resposta da API
