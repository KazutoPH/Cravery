import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: {type: Number, required: true},
  category: {    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' },
  options: {type: Array },
  createdAt: { type: Date, default: Date.now },
})

const Product = mongoose.models. Product || mongoose.model('Product', productSchema)

export default Product