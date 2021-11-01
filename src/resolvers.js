import { tasks } from './sample';

import User from './models/user'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World con graphql'
        },
        greet(root,{ name }, ctx) {
            console.log(ctx);
            return `Hello ${name}`;
        },
        task(){
            return tasks;
        },
        async users(){
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }){
            console.log(input);
            const newUser = new User(input);
            console.log(newUser);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id}) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new: true} );
        }
    }
};