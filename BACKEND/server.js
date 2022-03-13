const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config(); // reading all .env variables for relevent files // or the link which i have copied from mongodb is in .env file. so we have to read that file 
const connectDB = require('./config/db');

//newly added
const purchases = require("./customerData/purchases");
const customerRoutes = require("./route/customerRoutes");
const purchaseRoutes = require("./route/purchaseRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 8000;

connectDB();

//middleware
app.use(bodyParser.json());
//using declared dependancys 
app.use(cors());
app.use(express.json());

/*cus db con*/
//connecting database

const URL = process.env.MONGODB_URL; //whre we made in .env

mongoose
  .connect(URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => {
    //If connection success

    console.log("Database is successfully connected");
  })

  .catch(
    //If connection not success

    (err) => console.log("DB connection error", err)
  );

//create connection

const connection = mongoose.connection; //mongoDb connection we assigned as a separate variable
connection.once("open", () => {
  //you can use function() also except ()=> this
  console.log("Mongodb Connection Success!");
});

//accessing to the students.js file in route folder
//const studentRouter = require("./routes/students.js");
//app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});







/* cus db con */

//****import routes
const stockRoutes = require('./route/stocks');
const employeeRoutes = require('./route/employees');
const employeeAttendances = require('./route/attendances');
const employeeSalary = require('./route/esals');
const itemRoutes = require('./route/itemRoutes');
//newly added
const productRoutes = require("./route/productRoutes");
const shoppingRoutes = require("./route/productShoppingRouter")
const shoppingRoute = require("./route/productShoppingRoute")

//payment
const OnlinePayRoute = require("./route/onlinePay");


//****route middleware
app.use(stockRoutes);
app.use(employeeRoutes);
app.use(employeeAttendances);
app.use(employeeSalary);
app.use(itemRoutes);

//newly added
app.use(productRoutes);
app.use(shoppingRoutes);
app.use(shoppingRoute);

//payments
app.use(OnlinePayRoute);


//cus

app.use("/api/customers",customerRoutes);
app.use("/api/purchases",purchaseRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})