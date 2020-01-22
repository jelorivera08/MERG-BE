const { printSchema } = require('graphql');
const fs = require('fs');

const printSchemaFromBuild = schema => {
  fs.writeFile('./schema.graphql', printSchema(schema), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('Schema generated');
  });
};

module.exports = printSchemaFromBuild;
