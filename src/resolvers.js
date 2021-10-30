import { tasks } from './sample';

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World con graphql'
        },
        greet(root, args) {
            console.log(args);
            return `Hello ${args.name}`;
        },
        task(){
            return tasks;
        }
    }
};