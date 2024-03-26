import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const port = process.env.PORT || 2000;

server.get('/',  (req, res) => {
    res.send('Hello World!');
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})