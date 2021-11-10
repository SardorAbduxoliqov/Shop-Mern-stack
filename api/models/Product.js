const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array, trim: true },
    size: { type: Array, trim: true },
    color: { type: Array, trim: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
