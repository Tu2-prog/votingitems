import express from 'express';

import { getItems, create, updateItem, deleteItem } from '../adapter/controller';

export default (router: express.Router) => {
    router.get('/storage/get', getItems);  
    router.post('/storage/create', create);
    router.patch('/storage/update/:id', updateItem);
    router.delete('/storage/delete/:id', deleteItem);
}