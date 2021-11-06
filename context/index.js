const { users } = require("../databases/users")

const { statements } = require("../databases/statements")

const context = {
    users,
    statements
}

module.exports = { context }