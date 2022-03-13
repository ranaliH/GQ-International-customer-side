const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
  },
  {
    //to get when it is created
    timestamps: true,
  }
);

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
