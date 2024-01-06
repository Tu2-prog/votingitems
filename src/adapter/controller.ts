import express from "express";
import { getVotingItems, createVotingItem, getVotingItemById, deleteItemById } from "../database/items";

export const getItems = async(req: express.Request, res: express.Response) => {
    try{
        const items = await getVotingItems();
        return res.status(200).json(items);
    }
    catch(error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const create = async(req: express.Request, res: express.Response) => {
    try{
        const {title, location} = req.body;
        if(!title || !location){
            return res.sendStatus(400);
        }
        const mail = createVotingItem({
            title,
            location,
            no_votes: 0
        });
        return res.status(200).json(mail).end();
    }
    catch(error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const updateItem = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;

      const item = await getVotingItemById(id);

      item.no_votes++;
      await item.save();

      return res.status(200).json(item).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
}

export const deleteItem = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
  
      const deletedItem = await deleteItemById(id);
  
      return res.json(deletedItem);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
}