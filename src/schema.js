//definimos que es lo que podemos consultar desde Graph QL
//REsolve no sdice que haremos cuando consulten algo
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `

    type Query {
        hello: String
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})