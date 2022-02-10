const {gql } = require('apollo-server')

const typeDefs = gql`
    enum PhotoCategory {
        SELFIE
        PORTRAIT
        ACTION
        LANDSCAPE
        GRAPHIC
    }

    type Photo {
        id: ID!
        url: String!
        name: String!
        description: String
        category: PhotoCategory!
        postedBy: User!
        taggedUsers: [User!]!
    }

    input PostPhotoInput {
        name: String!
        category: PhotoCategory=PORTRAIT
        description: String
    }

    type User {
        githubLogin: ID!
        name: String!
        avatar: String
        postedPhotos: [Photo!]!
        inPhotos: [Photo!]!
    }

    type Query {
        totalPhotos: Int!
        allPhotos: [Photo!]!
        allUsers: [User!]!
    }

    type Mutation {
        postPhoto(input: PostPhotoInput): Photo!
    }
`

module.exports = typeDefs