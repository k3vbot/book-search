const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String
        bookCount: Int
        saveBooks: [Book]
    }
    input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: bookInput!): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs