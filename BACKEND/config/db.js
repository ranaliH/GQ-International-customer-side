require('dotenv').config;
const mongoose =  require('mongoose');

const connectDB = async() =>{

 //connecting database
const URL = process.env.MONGODB_URL; //where we made in .env

mongoose.connect(URL, {

    useNewUrlParser: true,

    useUnifiedTopology: true,

  })

  .then(() => {

    //If connection success

    console.log('Database is successfully connected');

  })

  .catch(

    //If connection not success

    (err) => console.log('DB connection error', err)

  );

//create connection

const connection = mongoose.connection; //mongoDb connection we assigned as a separate variable
connection.once("open", () => { //you can use function() also except ()=> this
    console.log("Mongodb Connection Success!");
})

}
 
module.exports = connectDB;