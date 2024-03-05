"use server" 

import { connectToDB } from "../mongoose"
import Category from "../models/category.model"
import Product from "../models/product.model";

export async function getCategories(){
  try {
    connectToDB()
    const category = await Category.find({},{'_id': 1, 'categoryName': 1})

    return JSON.parse(JSON.stringify(category))
  } catch (error) {
  }
}

export async function getProductsByCategory(_id:any){
  try {
    connectToDB()
    const products = await Category.findOne({ _id: _id})
    .populate({
      path: 'products',
      model: Product
    }).lean()

    return JSON.parse(JSON.stringify(products))
  } catch (error) {
  }
}