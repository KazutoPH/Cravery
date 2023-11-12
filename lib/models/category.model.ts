import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
})

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema)

export default Category