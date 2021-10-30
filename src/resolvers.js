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
    },
    Mutation: {
        createTask(_, { input }){
            // console.log(input);
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
};