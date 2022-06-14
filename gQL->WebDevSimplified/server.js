const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

// Server
const app = express();
const PORT = 5000;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "hello",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "HelloMom",
      },
    }),
  }),
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
// Server Start
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
