import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

dotenv.config();
dbConnect();

const server = express();
const port = process.env.PORT || 2000;

server.get('/',  (req, res) => {
    res.send('Hello World!');
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
})