const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");
const generateToken = require("../utils/generateToken");

const registerCustomer = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //checking whether entered email is in db
  const customerExists = await Customer.findOne({ email });

  if (customerExists) {
    res.status(400);
    throw new Error("Customer Already Exists");
  }

  //if not cretae a user in db
  const customer = await Customer.create({
    name,
    email,
    password,
    pic,
  });

  //if successfully created
  if (customer) {
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      isAdmin: customer.isAdmin,
      pic: customer.pic,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occured!");
  }
});

const authCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find email in db
  const customer = await Customer.findOne({ email });

  //check whether password is matching with email and return data
  if (customer && (await customer.matchPassword(password))) {
    res.json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      isAdmin: customer.isAdmin,
      pic: customer.pic,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const updateCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.customer._id);

  if (customer) {
    customer.name = req.body.name || customer.name;
    customer.email = req.body.email || customer.email;
    customer.pic = req.body.pic || customer.pic;

    if (req.body.password) {
      customer.password = req.body.password;
    }

    const updatedCustomer = await customer.save();
    res.json({
      _id: updatedCustomer._id,
      name: updatedCustomer.name,
      email: updatedCustomer.email,
      pic: updatedCustomer.pic,
      token: generateToken(updatedCustomer._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//to routes
module.exports = { registerCustomer, authCustomer, updateCustomerProfile };
