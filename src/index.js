const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const { setupDB } = require('./config/databaseConnection');

const app = express();

setupDB(v => console.log(v));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(4000);
console.log('SERVER OK');
