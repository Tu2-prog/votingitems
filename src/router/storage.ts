import express from 'express';

import { getItems, create, updateItem } from '../adapter/controller';

export default (router: express.Router) => {
    router.get('/storage/get', getItems);  
    router.post('/storage/create', create);
    router.patch('/storage/update/:id', updateItem);
}