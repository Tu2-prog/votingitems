import express from 'express';

import { getItems } from '../adapter/controller';

export default (router: express.Router) => {
    router.get('/store', getItems)    
}