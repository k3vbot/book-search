import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        saveBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
                user {
                    _id
                    username
                    email
                    bookCount
                    savedBooks {
                        bookId
                        title
                        description
                        authors
                        link
                        image
                    }
                }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!) {
        saveBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authos
                image
                description
                title
                link
            }
        }
    }
`