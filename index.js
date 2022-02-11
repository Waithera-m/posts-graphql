const { ApolloServer } = require('apollo-server-express')
const expressPlayground = require('graphql-playground-middleware-express').default
const express = require('express')
const { readFileSync } = require('fs')
const { MongoClient }  = require("mongodb")

const typeDefs = require('./typeDefs.graphql')
const resolvers = require('./resolvers')

require('dotenv').config()

async function start() {
    const app = express()
    const MONGO_DB = process.env.DB_HOST
    const client = await MongoClient.connect(
        MONGO_DB,
        { useNewUrlParser:true }
    )
    const db = client.db()
    const context = {db}
    const server = new ApolloServer({typeDefs, resolvers, context})

    server.start().then(res => {
        server.applyMiddleware({app})
    })
    const PORT = 4000

    app.get('/', (req, res) => res.end("PhotoShare API, bienvenue"))
    app.get('/playground', expressPlayground({endpoint: '/graphql'}))

    app.listen({port: PORT}, () => {
        console.log(`app running on localhost:${PORT}${server.graphqlPath}`)
    })
}

start()
