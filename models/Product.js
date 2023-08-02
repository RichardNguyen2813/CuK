import {model,Schema,models} from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true },
    images: [{type:String}],
    category: {type:String, ref:'Category'},
    //properties: {type:String},
    properties: {type:Object},
//}, {
    //timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);