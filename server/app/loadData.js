import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/mongooseConfig.js';
import KPI from '../models/kpi.js';
import kpis from '../data/seeder.js';

dotenv.config();
connectDB();

const importData = async () => {
    const data = kpis
    try {
        await KPI.insertMany(data);
        console.log(` - > Data loaded `);
    }catch(error)
    {
        console.log(`Error : `+error.message);
        process.exit(1);
    }
}

const destroyData = async() => {
    try {
        await KPI.deleteMany();
        console.log(` - > Data destroyed `);
    }catch(error)
    {
        console.log(`Error : `+error.message);
        process.exit(1);
    }
}
export {importData, destroyData};