const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType, 
  GraphQLString
} = require("graphql");

const schema = new GraphQLSchema({
  query : new GraphQLObjectType({
    name : "HelloWorld",
    fields : () => ({
      message : {
        type : GraphQLString,
        resolve : () => "Hello World"             //default
      }
    })
  })
})

app.use("/graphql", expressGraphQL.graphqlHTTP({
  schema : schema,
  graphiql : true
}))

app.listen(5000, () => {
  console.log("Server started at port 5000");
})