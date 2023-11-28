# avaliacao-laboratorio

### Tecnologia Utilizadas
<ul>
  <li>Python</li>
  <li>React Typescript</li>
  <li>Flask</li>
  <li>MySQL</li>
</ul>

### Passo a passo de como rodar o projeto

<p>O projeto necessita que a maquina tenha instalado, o <a href="https://nodejs.org/en">Node.js</a>, <a href="https://dev.mysql.com/downloads/mysql/"> MySQL 8.2.</a> e o <a href="https://dev.mysql.com/downloads/workbench/">MySQL Workbench</a>.</p>

## Banco de dados
<p>
  É necessario criar um banco de dados, logo após criar uma tabela chamada "usuarios" que tem 6 colunas que são "idusuarios, nome, telefone, cpf, estado, cidade" tem que está nessa exata ordem.
  Quando criado guarde as informações "user, password, host, database"
</p>

```
-- Criação do banco de dados (substitua 'nome_do_banco' pelo nome desejado)
CREATE DATABASE nome_do_banco;

-- Utilização do banco de dados recém-criado
USE nome_do_banco;

-- Criação da tabela "usuarios"
CREATE TABLE usuarios (
    idusuarios INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    telefone VARCHAR(11),
    cpf VARCHAR(11),
    estado VARCHAR(50),
    cidade VARCHAR(50)
);
```

## Back-end
<p>
  Na pasta backend é necessario instalar as seguintes bibliotecas, flask, flask-cors e mysql.connection.
  Usando o comando abaixo
</p>

```
pip install flask flask-cors mysql.connection
```
<p>
  Logo após configure as variaveis de conexão de acordo com seu banco de dados
</p>

```
db_config = mysql.connector.connect(
    user = "",
    password = "",
    host = "",
    database = "",
)
```

## Front-end

<p>
  E na pasta frontend basta rodar o comando "npm install" para instalar as depedencias. Apos ter instalado as depedencias, basta rodar o comando "npm run dev" para inicializar o projeto
</p>

```
npm install
```

```
npm run dev
```
