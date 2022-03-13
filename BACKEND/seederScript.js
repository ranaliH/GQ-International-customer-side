require('dotenv').config();

const itemData = require('./data/items');
const connectDB = require('./config/db');
const Item= require('./models/Items');

connectDB();

const importData = async() =>{
    try {
        await Item.deleteMany({});

        await Item.insertMany(itemData);

        console.log("Data import success");

        process.exit();

    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }

};
importData();