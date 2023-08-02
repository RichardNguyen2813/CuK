import mongoose, {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
    name: {type:String,required:true},
    //parent: {type:mongoose.Types.ObjectId, ref:'Category'},
    parent: {type:String, ref:'Category'},
    //properties: [{type:String}]
    properties: [{type:Object}]
});

export const Category = models?.Category || model('Category', CategorySchema);