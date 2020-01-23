/* eslint-disable no-undef */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const printSchemaFromBuild = require('./config/printSchema');
const { setupDB } = require('./config/databaseConnection');
const cors = require('cors');
const app = express();

setupDB(v => console.log(v));

const port = process.env.PORT || 4000;

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(port);
printSchemaFromBuild(schema);
console.log('SERVER OK');
