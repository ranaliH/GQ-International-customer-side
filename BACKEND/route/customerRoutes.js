const express = require("express");

const {
  registerCustomer,
  authCustomer,
  updateCustomerProfile,
} = require("../Controllers/customerControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerCustomer);
router.route("/login").post(authCustomer);
router.route("/profile").post(protect, updateCustomerProfile);

module.exports = router;
