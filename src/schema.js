//definimos que es lo que podemos consultar desde Graph QL
//REsolve no sdice que haremos cuando consulten algo
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

// Es signo de admiracion al final es para especificar que el dato es requerido
const typeDefs = `

    type Query {
        hello: String,
        greet(name: String!): String,
        task:[Task]
    }

    type Task {
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})