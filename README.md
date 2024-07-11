# Catálogo de livros Backend

Uma aplicação Node.js para criar um catálogo de livros utilizando a API Gutendex e armazenar os dados em um banco de dados MongoDB.


## Funcionalidades

- Utilização de API externa


## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Postman (para testes de API)

## Instalação
### Pré-requisitos

- Node.js instalado
- MongoDB instalado e rodando localmente ou configurado em uma URL remota


### Passos para Instalação
1. Clone o repositório:
     Copiar código-
      git clone https://github.com/LucasGonzagaTech/catalogodelivrosBackend
   
2. Instale as dependências:
    Copiar código-
      npm install

3. Configuração do Banco de Dados:
    Certifique-se de que o MongoDB esteja em execução (mongod).
   
4. Configuração do Ambiente:
    Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente, se necessário.

   
### Buscar e armazenar livros da Gutendex:

1. Acesse http://localhost:3000/fetch-books para buscar e armazenar os livros na base de dados.

2. Acesse http://localhost:3000/books para visualizar os livros armazenados no banco de dados.


### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença
Este projeto está licenciado sob a MIT License.
