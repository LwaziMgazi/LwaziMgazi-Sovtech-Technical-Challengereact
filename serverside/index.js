const{ ApolloServer,gql}= require('apollo-server-express');
const fs=require('fs');
const express=require('express');
const app= express();

//defining gql schema and resolver
const typeDefs= gql(fs.readFileSync('./schema.graphql', {encoding:'utf-8'}));

const resolvers=require('./resolvers');

//instantaite Apollo Serve
const apolloServer= new ApolloServer({typeDefs,resolvers});

//plug appollo server on the existing app

apolloServer.applyMiddleware({app,path:'/graphql'});

app.listen(5000,()=>console.log('Listening in port 5000'));