import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from '../config/mongooseConfig.js';

//CONFIGURATIONS
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({
    policy:"cross-origin"
}));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

//START APPLICATION
connectDB().then(
    app.listen(port, () => {
        console.log(`App Started On  http://localhost:${port}`)
    })
);
