const typeDefs = `#graphql

    type Query {
        users: [User!]!
        user(emailAddress: String!): User
    }

    type User {
        firstName: String!,
        lastName: String!,
        emailAddress: String!,
        password: String!,
        isActive: Boolean!
    }
`

export default typeDefs
