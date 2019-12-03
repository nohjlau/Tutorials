const express = require('express');
const expressGraphQL = require("express-graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello World' //Function that tells GraphQL where to get the information
            }
        })
    })
})
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.listen(5000., () => console.log('Server Running'));
