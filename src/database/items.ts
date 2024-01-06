import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    no_votes: {type: Number}
})

export const ItemModel = mongoose.model('VotingApp', ItemSchema, "VotingItems");

export const getVotingItems = () => ItemModel.find();
export const createVotingItem = (values: Record<string, any>) => new ItemModel(values).save().then((voting_item) => voting_item.toObject());
export const getVotingItemById = (id: string) => ItemModel.findById(id);
export const updateVotingItemById = (id: string, values: Record<string, any>) => ItemModel.findByIdAndUpdate(id, values);
export const deleteItemById = (id: string) => ItemModel.findOneAndDelete({ _id: id });
