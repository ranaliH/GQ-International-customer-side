const asyncHandler = require("express-async-handler");
const Purchase = require("../models/purchaseModel");

const getPurchases = asyncHandler(async (req, res) => {
  const purchases = await Purchase.find({ customer: req.customer._id });
  res.json(purchases);
});

const createPurchase = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const purchase = new Purchase({
      customer: req.customer._id,
      title,
      content,
      category,
    });

    const createPurchase = await purchase.save();

    res.status(201).json(createPurchase);
  }
});

const getPurchaseById = asyncHandler(async (req, res) => {
  const purchase = await Purchase.findById(req.params.id);

  if (purchase) {
    res.json(purchase);
  } else {
    res.status(404).json({ message: "Purchases not found" });
  }
});

const UpdatePurchase = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const purchase = await Purchase.findById(req.params.id);

  if (purchase.customer.toString() !== req.customer._id.toString()) {
    res.status(401);
    throw new Error("You have not access to this purchase");
  }

  if (purchase) {
    purchase.title = title;
    purchase.content = content;
    purchase.category = category;

    const updatedPurchase = await purchase.save();
    res.json(updatedPurchase);
  } else {
    res.status(404);
    throw new Error("Purchase is not available");
  }
});

const DeletePurchase = asyncHandler(async (req, res) => {
  const purchase = await Purchase.findById(req.params.id);

  if (purchase.customer.toString() !== req.customer._id.toString()) {
    res.status(401);
    throw new Error("You have not access to this purchase");
  }

  if (purchase) {
    await purchase.remove();
    res.json({ message: "Purchase is removed" });
  } else {
    res.status(404);
    throw new Error("purchase is not found");
  }
});

module.exports = {
  getPurchases,
  createPurchase,
  getPurchaseById,
  UpdatePurchase,
  DeletePurchase,
};
