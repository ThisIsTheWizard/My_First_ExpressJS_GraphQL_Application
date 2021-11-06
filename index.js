const { ApolloServer } = require("apollo-server")

const { typeDefs } = require("./schemas/index")

const { resolvers } = require("./resolvers/index")

const { context } = require("./context/index")

const server = new ApolloServer({ typeDefs, resolvers, context })

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is listening at ${url}`)
    })

