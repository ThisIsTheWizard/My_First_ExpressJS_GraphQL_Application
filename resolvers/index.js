const resolvers = {
    Query: {
        user: (parent, args, { users }) => {
            return users.find(user => user.email === args.email)
        },
        users: (parent, args, { users }) => users,
        statement: (parent, args, { statements }) => {
            return statements.find(statement => statement.user === args.user)
        },
        statements: (parent, args, { statements }) => statements
    },
    User: {
        statements: (parent, args, { statements }) => {
            return statements.filter(statement => statement.user === parent._id)
        }
    },
    Statement: {
        user: (parent, args, { users }) => {
            return users.find(user => user._id === parent.user)
        }
    },
    Mutation: {
        createUser: (parent, args, { users }) => {
            const user = {
                _id: users.length + 1,
                name: args.name,
                email: args.email,
                password: args.password
            }

            users.push(user)
            
            return user
        },
        updateUser: (parent, args, { users }) => {
            const user = users.find(u => u._id === args._id)

            const userIndex = users.indexOf(user)

            if (args.name) {
                user.name = args.name
            }
            if (args.email) {
                user.email = args.email
            }
            if (args.password) {
                user.password = args.password
            }


            if (user._id && (userIndex >= 0)) {
                users[userIndex] = user
            }

            return user
        },
        deleteUser: (parent, args, { users }) => {
            const user = users.find(u => u._id === args._id)

            const userIndex = users.indexOf(user)

            if (user._id && (userIndex >= 0)) {
                users.splice(userIndex, 1)
            }

            return user
        },
        createStatement: (parent, args, { statements }) => {
            const statement = {
                _id: statements.length + 1,
                user: args.user,
                source: args.source,
                particulars: args.particulars,
                debitedAmount: args.debitedAmount || 0,
                creditedAmount: args.creditedAmount || 0
            }

            statements.push(statement)

            return statement
        },
        updateStatement: (parent, args, { statements }) => {
            const statement = statements.find(s => s._id === args._id)

            const statementIndex = statements.indexOf(statement)

            if (args.source) {
                statement.source = args.source
            }
            if (args.particulars) {
                statement.particulars = args.particulars
            }
            if (args.debitedAmount >= 0) {
                statement.debitedAmount = args.debitedAmount
            }
            if (args.creditedAmount >= 0) {
                statement.creditedAmount = args.creditedAmount
            }

            if (statement._id && (statementIndex >= 0)) {
                statements[statementIndex] = statement
            }

            return statement
        },
        deleteStatement: (parent, args, { statements }) => {
            const statement = statements.find(s => s._id === args._id)

            const statementIndex = statements.indexOf(statement)

            if (statement._id && (statementIndex >= 0)) {
                statements.splice(statementIndex, 1)
            }

            return statement
        }
    }
}

module.exports = { resolvers }
