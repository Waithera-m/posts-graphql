const { ApolloServer } = require('apollo-server-express')
const expressPlayground = require('graphql-playground-middleware-express').default
const express = require('express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({typeDefs, resolvers})
const app = express()

const PORT = 4000

server.start().then(res => {
    server.applyMiddleware({app})
})

app.get('/', (req, res) => res.end("PhotoShare API, bienvenue"))
app.get('/playground', expressPlayground({endpoint: '/graphql'}))

app.listen({port: PORT}, () => {
    console.log(`app running on localhost:${PORT}${server.graphqlPath}`)
})

