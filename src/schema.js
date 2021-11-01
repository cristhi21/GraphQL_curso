//definimos que es lo que podemos consultar desde Graph QL
//REsolve no sdice que haremos cuando consulten algo
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

// Es signo de admiracion al final es para especificar que el dato es requerido
const typeDefs = `

    type Query {
        hello: String,
        greet(name: String!): String,
        task:[Task],
        users:[User]
    }

    type Task {
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})