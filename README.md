# API Autenticação e Autorização

Rode o comando para executar a migração do banco de dados: 

```bash
npm run migrate:dev
```

**Será essencial ter um banco de dados criado e referenciado na variável de ambiente**

Rode o comando abaixo para iniciar a aplicação:

```bash
npm run dev
```

Esse projeto possui 3 rotas principais:

- Opportunity
- Applications 
- Users

## Opportunity

### Possíveis Erros - Legenda

- 403 - UNAUTHORIZED - Token inválido
- 403 - UNAUTHORIZED - Você não é o autor dessa opportunidade

```json
{
    "message": "Invalid Token"
}
```

```json
{
    "message": "You are not the owner of this opportunity"
}
```



Dentro da rota de opportunity, podemos:


**`Create - /opportunities POST`**

Padrão de corpo:

```json
{
    "title": "string",
    "description": "string"
}
```

Padrão de resposta (STATUS 201):

```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "userId": "number"
}
```

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido


**`FindMany - /opportunities ou /opportunties/user GET`**

Padrão de corpo(opcional):

```json
{
    "id": "number"
}
```

Padrão de resposta (STATUS 200):

```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "userId": "number",
}
```

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido

**`FindOne - /opportunities/:id GET`**

Padrão de corpo:


```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "userId": "number",
}
```

Padrão de resposta (STATUS 200):

```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "userId": "number"
}
```

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido
403 - UNAUTHORIZED - Você não é o autor dessa opportunidade

**`Update - /opportunities/:id PATCH`**

Padrão de corpo:

```json
{
    "title?": "string",
    "description?": "string"
}
```

Padrão de resposta (STATUS 200):

```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "userId": "number"
}
```

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido
403 - UNAUTHORIZED - Você não é o autor dessa opportunidade

**`Delete - /opportunities/:id DELETE`**

Padrão de corpo:

```json
{
    "id": "number"
}
```

STATUS DE RESPOSTA (204)

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido
403 - UNAUTHORIZED - Você não é o autor dessa opportunidade


## Applications

Dentro da rota de Applications, podemos:

**`Create - /opportunities/:id/applications POST`**

Padrão de corpo:

```json
{
    "name": "string",
    "email": "string",
    "linkedin": "string"
}
```

Padrão de resposta (STATUS 201):

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
    "linkedin": "string",
    "opportunityId": "number"
}
```

**`FindMany - /opportunities/:id/applications GET`**

Padrão de corpo:

```json
{
    "id": "number"
}
```

Padrão de resposta (STATUS 200):

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
    "linkedin": "string",
    "opportunityId": "number",
}
```

### Possíveis Erros 

403 - UNAUTHORIZED - Token inválido

```json
{
    "message": "Invalid Token"
}
```

## Users 

Dentro da rota Users, podemos:

*Nas rotas de usuário, é importante não retornar a senha*

**`Register - Registrar usuários /users POST`**

Padrão de corpo:

```json
{
    "name": "string",
    "email": "string",
    "password": "string",
}
```

Padrão de resposta (STATUS 201):

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
}
```

**`Login - /users/login POST`**

Padrão de corpo:

```json
{
    "email": "string",
    "password": "string",
}
```

Padrão de resposta (STATUS 200):

```json
{ 
    "accessToken": "string",
    {
        "id": "number",
        "name": "string",
        "email": "string",
    }
}
```

### Possíves Erros 

404 - NOT FOUND - Usuário não cadastrado

```json
{
    "message": "User not registered"
}
```

404 - FORBIDDEN - Email e senha não correspondem

```json
{
    "message": "Credentials not valid"
}
```


**`getUser - /user GET (Precisa de autorização)`**

Autorização

```json
{
    "headers": {
        "authorization": "Bearer token"
    }
}
```


Padrão de corpo:

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
}
```

Padrão de resposta (STATUS 201):

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
}
```

### Possíves Erros 

401 - UNAUTHORIZED
