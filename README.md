
![Logo](https://i.imgur.com/LtCEdEC.png)


# Chronos API
A simple Graphql API for skills demonstration for Code Éxitos




## Tech Stack

**Server:** Node, NestJS, GraphQl, MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
contact me if you need the value for the .env variables

`JWT_SECRET`,
`MONGO_URI`



## Run Locally

Clone the project

```bash
  git clone https://github.com/PENA98/chronos-api.git
```

Go to the project directory

```bash
  cd chronos-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```
## API Reference

#### Get collection

```http
  Graphql query collectionItem
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `collectionID` | `string` | **Required**.id of the collection to fetch |

#### Get all collections

```http
  Graphql query getUserCollections
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`      | `string` | **Required**. Id of user owner of collections |


#### Get user

```http
  Graphql query user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user |


#### create collection

```http
  Graphql mutation createCollection
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Collection`      | `Object` | **Required**. Object of the new collection|

#### create collection

```http
  Graphql mutation uopdateCollection
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Collection`      | `Object` | **Required**. Object of the new collection|
`id`      | `string` | **Required**. id of the collection|

#### create collection

```http
  Graphql mutation deleteCollection
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the collection|

#### create collection

```http
  Graphql mutation createCollectionItem
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CollectionItem`      | `Object` | **Required**. Object of the new collectionItem|

#### create collection

```http
  Graphql mutation uopdateCollectionItem
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CollectionItem`      | `Object` | **Required**. Object of the new collectionItem|
`id`      | `string` | **Required**. id of the collection|

#### create collection

```http
  Graphql mutation deleteCollectionItem
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the collectionItem|








## Project Structure
```
chronos-api
├─ package-lock.json
├─ package.json
├─ Procfile
├─ README.md
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ auth
│  │  ├─ auth.module.ts
│  │  ├─ auth.resolver.ts
│  │  ├─ auth.service.ts
│  │  ├─ dto
│  │  │  ├─ login.response.ts
│  │  │  ├─ loginUser.input.ts
│  │  │  └─ signupUser.input.ts
│  │  ├─ gql-authguard.ts
│  │  ├─ jwt.auth.guard.ts
│  │  ├─ jwt.strategy.ts
│  │  └─ local.strategy.ts
│  ├─ collection
│  │  ├─ collection.module.ts
│  │  ├─ collection.resolver.ts
│  │  ├─ collection.schema.ts
│  │  ├─ collection.service.spec.ts
│  │  ├─ collection.service.ts
│  │  └─ dto
│  │     └─ collection-delete.response.ts
│  ├─ collectionItem
│  │  ├─ collectionItem.module.ts
│  │  ├─ collectionItem.resolver.spec.ts
│  │  ├─ collectionItem.resolver.ts
│  │  ├─ collectionItem.schema.ts
│  │  ├─ collectionItem.service.spec.ts
│  │  └─ collectionItem.service.ts
│  ├─ main.ts
│  ├─ schema.gql
│  └─ users
│     ├─ dto
│     │  ├─ create-user.input.ts
│     │  └─ update-user.input.ts
│     ├─ entities
│     │  └─ user.entity.ts
│     ├─ user.module.ts
│     ├─ user.resolver.ts
│     ├─ user.schema.ts
│     └─ user.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
## Authors

- [@MaynorPeña](https://github.com/PENA98)

