import express from 'express';
import KPI from '../models/kpi.js';

const kpiRouter = express.Router();

kpiRouter.get('/kpis', async (req, res) => {
    try {
        //MONGO LOGIC 
        const kpis = await KPI.find();
        res.status(200).json(
            kpis
        )

    } catch(error) {
       console.log(`Error at kpiRouter \n ${error}`);
       res.status(404).json({
        message: error.message
       })
    }
})

export default kpiRouter;