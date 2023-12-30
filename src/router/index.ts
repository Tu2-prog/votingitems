import express from "express";
import storage from "./storage";

const router = express.Router();

export default (): express.Router => {
    storage(router);
    return router;
}

