# Avaliação de Laboratório

## Descrição do projeto
Este projeto visa desenvolver um sistema de cadastro de usuários em formato de tabela, proporcionando funcionalidades essenciais para a gestão eficiente de informações. O sistema é projetado com as seguintes funcionalidades principais:
- Cadastrar usuário
- Listar usuários
- Deletar usuários
- Atualizar dados do usuário

## Tecnologias Utilizadas
- Python
- React Typescript
- Flask
- MySQL

## Passo a Passo para Executar o Projeto

### Pré-requisitos
Certifique-se de ter as seguintes tecnologias instaladas em sua máquina:
- [Node.js 20.10.00 LTS](https://nodejs.org/en)
- [MySQL 8.2](https://dev.mysql.com/downloads/mysql/)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

### Banco de Dados
1. Crie um banco de dados. Substitua 'nome_do_banco' pelo nome desejado.
   ```sql
   CREATE DATABASE nome_do_banco;
   USE nome_do_banco;
   ```

2. Crie a tabela "usuarios" com as seguintes colunas: "idusuarios, nome, telefone, cpf, estado, cidade", nessa ordem.
   ```sql
   CREATE TABLE usuarios (
       idusuarios INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(75),
       telefone VARCHAR(11),
       cpf VARCHAR(11),
       estado VARCHAR(45),
       cidade VARCHAR(30)
   );
   ```

3. Anote as informações de conexão do banco de dados: "user, password, host, database".

### Back-end
1. Na pasta backend, instale as bibliotecas necessárias usando o seguinte comando:
   ```bash
   pip install flask flask-cors mysql.connector
   ```

2. Configure as variáveis de conexão no arquivo api_crud.py de acordo com as informações do banco de dados:
    ```python
    db_config = mysql.connector.connect(
        user = "",
        password = "",
        host = "",
        database = "",
    )
    ```
3. Inicialize a API com o seguinte comando no terminal:
   ```bash
   python api_crud.py
   ```

### Front-end
1. Na pasta frontend, instale as dependências usando o seguinte comando no terminal:
   ```bash
   npm install
   ```

2. Inicialize o projeto com o seguinte comando no terminal:
   ```bash
   npm run dev
   ```
