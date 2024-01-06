import express from "express";
import { getVotingItems, createVotingItem, getVotingItemById, deleteItemById } from "../database/items";

/**
 * Function to get all the documents in the NoSQL database.
 * @param res The response to the request made to the specific route of this microservice.
 * @returns Status Code of the http request.
 */
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

/**
 * Function to create a new document into the NoSQL database.
 * @param req The request to this microservice route with the parameters that are saved into the database.
 * @param res The response to this request after the operation was either successful or not.
 * @returns Status code of the http request.
 */
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

/**
 * Function to increment the number of votes in a specific document.
 * @param req The request containing the id of the target document.
 * @param res The response to this request after the operation was either successful or not.
 * @returns Status code of the http request.
 */
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

/**
 * Function to delete a specific document from the NoSQL database.
 * @param req The request containing the id of the target document.
 * @param res The response to this request after the operation was either successful or not.
 * @returns Status code of the http request.
 */
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