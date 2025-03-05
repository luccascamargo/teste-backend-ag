<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# API de Produtos

## Visão Geral

Esta API permite a criação, consulta, atualização e remoção de produtos. As rotas estão documentadas abaixo com exemplos de entrada e saída.

## Endpoints

### Criar um Produto

**Rota:** `POST /products`

**Descrição:** Cria um novo produto.

**Exemplo de Requisição:**

```json
{
    "nome": "Smartphone XYZ",
    "preco": 1999.99,
    "codigo_barras": "jkldansiduhi8h89327y987hh93fghhfue",
    "estoque": 10
}
```

**Exemplo de Resposta:**

```json
{
    "mensagem": "Produto criado com sucesso"
}
```

---

### Buscar Todos os Produtos

**Rota:** `GET /products`

**Descrição:** Retorna todos os produtos cadastrados.

**Exemplo de Resposta:**

```json
[
    {
        "codigo": 1,
        "nome": "Smartphone XYZ",
        "codigo_barras": "jkldansiduhi8h89327y987hh93fghhfue",
        "preco": 1999.99,
        "estoque": 10
    },
    {
        "codigo": 2,
        "nome": "Notebook ABC",
        "codigo_barras": "jkldansiduhi8h89327y987hh93fghhfue",
        "preco": 4999.99,
        "estoque": 5
    }
]
```

---

### Buscar um Produto por Código

**Rota:** `GET /products/:codigo`

**Descrição:** Retorna um produto específico pelo código.

**Exemplo de Requisição:**

```
GET /products/1
```

**Exemplo de Resposta:**

```json
{
    "codigo": 1,
    "nome": "Smartphone XYZ",
    "codigo_barras": "jkldansiduhi8h89327y987hh93fghhfue",
    "preco": 1999.99,
    "estoque": 10
}
```

---

### Atualizar um Produto

**Rota:** `PATCH /products/:codigo`

**Descrição:** Atualiza os dados de um produto.

**Exemplo de Requisição:**

```
PATCH /products/1
```

```json
{
    "preco": 1899.99,
    "estoque": 8
}
```

**Exemplo de Resposta:**

```json
{
    "message": "Produto atualizado com sucesso!"
}
```

---

### Deletar um Produto

**Rota:** `DELETE /products/:codigo`

**Descrição:** Remove um produto pelo seu código.

**Exemplo de Requisição:**

```
DELETE /products/1
```

**Exemplo de Resposta:**

```json
{
    "message": "Produto removido com sucesso"
}
```

### Respostas

### Explique a razão pela qual aceitou ou rejeitou o requisito de utilizar decimal para a quantidade em estoque.
#### Ao meu ver pode ser que o produto seja liquido. Exemplo. 10,5L de petroléo por galão.
#### Utilizei AI para gerar as docs e o seed de forma rapida e não perder esse tempo durante o processo
#### Não sabia se poderia utilizar algum ORM ou não. Utilizando TypeOrm ou Prisma haveria melhorias significativas no código. Ainda tem bastante coisa que daria para melhorar, mas como se trata de um teste achei melhor entregar funcionando do que entregar pela metade.

Obrigado pela oportunidade, abraços.


