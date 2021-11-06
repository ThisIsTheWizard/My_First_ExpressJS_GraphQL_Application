const { gql } = require("apollo-server")

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        statements: [Statement]
    }

    type Statement {
        _id: ID!
        user: User
        source: String!
        particulars: String
        debitedAmount: Int!
        creditedAmount: Int!
    }

    type Query {
        user(email: String!): User
        users: [User]
        statement(_id: String!): Statement
        statements: [Statement]
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
        ): User

        updateUser(
            name: String
            email: String
            password: String
        ): User

        deleteUser(_id: ID!): User

        createStatement(
            user: String!
            source: String!
            particulars: String!
            debitedAmount: Int!
            creditedAmount: Int!
        ): Statement

        updateStatement(
            _id: ID!
            source: String!
            particulars: String!
            debitedAmount: Int!
            creditedAmount: Int!
        ): Statement

        deleteStatement(_id: ID!): Statement
    }
`

module.exports = { typeDefs }