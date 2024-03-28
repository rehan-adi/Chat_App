import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import userRouts from './routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser';

dotenv.config();
dbConnect();

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 2000;

server.use('/api/user', userRouts);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
})