const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const printSchemaFromBuild = require('./config/printSchema');
const { setupDB } = require('./config/databaseConnection');
const cors = require('cors');
const app = express();

setupDB(v => console.log(v));

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(4000);
printSchemaFromBuild(schema);
console.log('SERVER OK');
