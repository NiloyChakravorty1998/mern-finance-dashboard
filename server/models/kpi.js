import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);


const dailySchema = new Schema({
    date : String,
    revenue : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    },
    expenses : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    },
},
// TO USE get(V) VALUE AS JSON
{ toJSON : { getters : true}});

const monthSchema = new Schema({
    month : String,
    revenue : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    },
    expenses : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    },
    operationalExpenses : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    },
    nonOperationalExpenses : {
        type : mongoose.Types.Currency,
        currency : "USD",
        get : (v) => v/100
    }
},
// TO USE get(V) VALUE AS JSON
{ toJSON : { getters : true}});

const KPISchema  = new Schema({
  totalProfit : {
    type : mongoose.Types.Currency,
    currency : "USD", 
    get: (v) => v/100
  },
  totalExpenses: {
    type: mongoose.Types.Currency,
    currency : "USD", 
    get: (v) => v/100
  },
  expensesByCategory: {
    type: Map,
    of : {
        type: mongoose.Types.Currency,
        currency : "USD", 
        get: (v) => v/100
    }
  },
  monthlyData: [monthSchema],
  dailyData:  [dailySchema], 
  
}, {timestamps : true, toJSON : { getters : true}});

const KPI = mongoose.model("KPI", KPISchema);
export default KPI;