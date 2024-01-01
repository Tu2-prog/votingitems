import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    time: {type: Date}
})

export const ItemModel = mongoose.model('VotingApp', ItemSchema, "VotingItems");

export const getVotingItems = () => ItemModel.find();