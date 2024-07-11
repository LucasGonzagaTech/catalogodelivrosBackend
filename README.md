Uma aplicação Node.js para criar um catálogo de livros utilizando a API Gutendex e armazenar os dados em um banco de dados MongoDB.

Pré-requisitos
Antes de começar, certifique-se de ter instalado o seguinte em sua máquina:

Node.js
MongoDB
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/gutendex-catalog.git
cd gutendex-catalog
Instale as dependências:

bash
Copiar código
npm install
Configuração
Configuração do Banco de Dados:

Certifique-se de que o MongoDB esteja em execução (mongod).
Configuração do Ambiente:

Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente, se necessário.
Uso
Inicie o servidor:

bash
Copiar código
npm start
Buscar e armazenar livros da Gutendex:

Acesse http://localhost:3000/fetch-books para buscar e armazenar os livros na base de dados.
Visualizar livros armazenados:

Acesse http://localhost:3000/books para visualizar os livros armazenados no banco de dados.
Estrutura do Projeto
server.js: Arquivo principal que configura o servidor Express e define as rotas.
models/: Pasta onde os modelos do Mongoose são definidos.
routes/: Pasta onde as rotas da aplicação são definidas.
config/: Pasta onde arquivos de configuração podem ser armazenados.
README.md: Este arquivo, contendo instruções sobre o projeto.
Tecnologias Utilizadas
Node.js
Express.js
MongoDB
Mongoose
Axios
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.
