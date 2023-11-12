import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from '../config/mongooseConfig.js';
import kpiRouter from '../router/kpiRouter.js';
import {importData, destroyData } from './loadData.js';

// CONFIGURATIONS
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// ROUTES
app.use('/kpi', kpiRouter);
// START APPLICATION
connectDB().then( async () => {
    //DELETE DATA TO REMOVE  DUPES
    await destroyData();
    //LOAD DATA FROM SEEDER FILE
    await importData();
    // Start the express application
    app.listen(port, () => {
        console.log(`Application started on : http://localhost:${port}`);
    });
});
