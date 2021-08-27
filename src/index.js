import { GraphQLServer } from "graphql-yoga"

import {typeDefs} from "./typeDef"
import {resolvers} from "./resolvers"

import "./database"

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(()=>{
    console.log('Server is Running')
});