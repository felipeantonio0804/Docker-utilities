import { Schema } from 'mongoose';

//Esto no es typescript es la biblioteca de mongoose
export const TaskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean
})