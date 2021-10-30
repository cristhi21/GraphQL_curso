export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World con graphql'
        },
        greet: () => {
            return 33;
        }
    }
};