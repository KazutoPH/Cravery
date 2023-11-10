"use server" 

import { connectToDB } from "../mongoose"
import Category from "../models/category.model"
import Product from "../models/product.model";

export async function getCategory(){
  try {
    connectToDB();

    const listofcategory = await Category.find().lean()

    return listofcategory
    
  } catch (error) {
   
  }
}

export async function addProduct({ name, description, category, price, options}:{
  name: string,
  description: string,
  category:string,
  price: number,
  options: any,
}) {
  try {
    connectToDB();

    const newProduct = await Product.create({
      productName: name,
      description: description,
      category: category,
      price: price,
      options: options
    })

    console.log('product added successfully')
  } catch (error: any) {
    throw new Error(`Error adding Product: ${error.message}`)
  }

}

