import express from "express";
import { getVotingItems } from "../database/items";

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