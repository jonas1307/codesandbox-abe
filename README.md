# Trabalho Prático 1 - Implementação de API

Trabalho implementado utilizando tecnologia node.js, com as dependências `http`, `url` e `crypto`.

Grupo de trabalho: 

- Leandro Moreira da Silva
- Leon Wagner Farias de Souza
- Jonas Lima de Amorim
- Junia Almeida Matos Boechat
- Samara Luiza da Silva

---

O trabalho pode ser acessado no link [CodeSandBox Ambiente](https://codesandbox.io/p/github/jonas1307/codesandbox-abe/main)

Baixe o repositório e instale as dependências utilizando o comando `yarn install` e inicialize à aplicação  utilizando o comando `yarn start`.

Os testes podem ser realizados utilizando as seguintes rotas:

GET /pessoas

Lista de pessoas completas

```cmd
curl --location 'http://localhost:3000/pessoas'

```

GET /carros

Lista de carros completas

```cmd
curl --location 'http://localhost:3000/carros'

```

GET /animais

Lista de animais completas

```cmd
curl --location 'http://localhost:3000/animais'

```

GET /pessoas/id

Carrega as informações de uma pessoa específica.

```cmd
curl --location 'http://localhost:3000/pessoas/1'
```

GET /carros/id

Carrega as informações de um carro específico.

```cmd
curl --location 'http://localhost:3000/carros/1'
```

GET /animais/id

Carrega as informações de um animal específico.

```cmd
curl --location 'http://localhost:3000/animais/1'
```


## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/projects)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)
