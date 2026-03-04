# API Task Manager

## Descrição do Projeto
API RESTful para gerenciamento de tarefas desenvolvida com Node.js, Express e PostgreSQL. Ela fornece endpoints para criar, listar, atualizar e excluir tarefas, além de buscar tarefas específicas por ID.

## Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **Docker**
- **PostgreSQL**
- **Nodemon**

## Estrutura do Projeto

```
api-task-manager/
├── docker-compose.yml
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── tasks.controller.js
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── models/
│   │   └── tasks.model.js
│   └── routes/
│       └── tasks.routes.js
```

## Variáveis de Ambiente
O projeto utiliza um arquivo `.env` com as seguintes variáveis:

```
DB_HOST=<host do banco>
DB_PORT=<porta do banco>
DB_USER=<usuário do banco>
DB_PASSWORD=<senha do banco>
DB_NAME=<nome do banco>
PORT=<porta da aplicação>
```

Certifique-se de criar o arquivo `.env` na raiz do projeto e preencher os valores adequados.

## Como rodar

### Pré-requisitos
- **Docker** instalado na máquina.
- **Node.js** e **npm** (caso não utilize Docker).

### Passos
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd api-task-manager
   ```
3. Suba o banco de dados com Docker:
   ```bash
   docker compose up -d
   ```
4. Inicie a API localmente:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em `http://localhost:3000`.

## Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints Disponíveis

#### 1. **Criar Tarefa**
- **POST** `/tasks`
- **Body**:
  ```json
  {
    "titulo": "Título da tarefa",
    "descricao": "Descrição da tarefa",
    "concluida": false
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "titulo": "Título da tarefa",
    "descricao": "Descrição da tarefa",
    "concluida": false,
    "created_at": "2026-03-03T12:00:00.000Z"
  }
  ```

#### 2. **Listar Tarefas**
- **GET** `/tasks`
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "titulo": "Título da tarefa",
      "descricao": "Descrição da tarefa",
      "concluida": false,
      "created_at": "2026-03-03T12:00:00.000Z"
    }
  ]
  ```

#### 3. **Buscar Tarefa por ID**
- **GET** `/tasks/:id`
- **Resposta**:
  ```json
  {
    "id": 1,
    "titulo": "Título da tarefa",
    "descricao": "Descrição da tarefa",
    "concluida": false,
    "created_at": "2026-03-03T12:00:00.000Z"
  }
  ```

#### 4. **Atualizar Tarefa**
- **PUT** `/tasks/:id`
- **Body**:
  ```json
  {
    "titulo": "Novo título",
    "descricao": "Nova descrição",
    "concluida": true
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "titulo": "Novo título",
    "descricao": "Nova descrição",
    "concluida": true,
    "created_at": "2026-03-03T12:00:00.000Z"
  }
  ```

#### 5. **Excluir Tarefa**
- **DELETE** `/tasks/:id`
- **Resposta**:
  Sem conteúdo (status 204).

## Possíveis Respostas de Erro

### 400 – Requisição Inválida
- **ID inválido**:
  ```json
  {
    "erro": "ID inválido."
  }
  ```
- **Campo título obrigatório**:
  ```json
  {
    "erro": "O campo titulo é obrigatório."
  }
  ```

### 404 – Recurso Não Encontrado
- **Tarefa não encontrada**:
  ```json
  {
    "erro": "Tarefa não encontrada."
  }
  ```

### 500 – Erro Interno do Servidor
- **Erro inesperado**:
  ```json
  {
    "erro": "Erro interno do servidor."
  }
  ```