# GraphQL Custom Data Types
Custom GraphQL Types, such as Date and Cursor

## Install
`yarn add @limit-zero/graphql-custom-types`

## Usage
Within your root resolver file, require the types and add them to the tree, similar to the following:
```js
const { DateType, CursorType } = require('@limit-zero/graphql-custom-types');

const resolvers = {
  Date: DateType,
  Cursor: CursorType,
};
```

Also, don't forget to add them to your GraphQL definitions:
```graphql
scalar Date
scalar Cursor
```
