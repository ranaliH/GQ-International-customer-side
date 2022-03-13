const express = require("express");
const { getPurchases } = require("../Controllers/purchaseController");
const { createPurchase } = require("../Controllers/purchaseController");
const { protect } = require("../middlewares/authMiddleware");
const { getPurchaseById } = require("../Controllers/purchaseController");
const { UpdatePurchase } = require("../Controllers/purchaseController");
const { DeletePurchase } = require("../Controllers/purchaseController");

const router = express.Router();

router.route("/").get(protect, getPurchases);
router.route("/create").post(protect, createPurchase);
router
  .route("/:id")
  .get(getPurchaseById)
  .put(protect, UpdatePurchase)
  .delete(protect, DeletePurchase);

module.exports = router;
