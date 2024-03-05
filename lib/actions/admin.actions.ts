"use server" 

import { connectToDB } from "../mongoose"
import Category from "../models/category.model"
import Product from "../models/product.model";

export async function getCategory(){
  try {
    connectToDB();

    const listofcategory = await Category.find().lean()

    return JSON.parse(JSON.stringify(listofcategory))
    
  } catch (error) {
   
  }
}

export async function addProduct({ name, description, categoryId, category, price, options}:{
  name: string,
  description: string,
  categoryId: string,
  category:string,
  price: number,
  options: any,
}) {
  try {
    connectToDB();

    if(categoryId === '') {
      const newCategory = await Category.create({categoryName: category})
    }
 
    const getCategoryId = await Category.findOne({'categoryName': category},{'_id': 1, 'categoryName': 1})

    const newProduct = await Product.create({
      productName: name,
      description: description,
      category: getCategoryId._id,
      price: price,
      options: options
    })

    await Category.findByIdAndUpdate(getCategoryId._id, {
      $push: { products: newProduct._id  }
    });
    
    console.log('product added successfully')
    
  } catch (error: any) {
    throw new Error(`Error adding Product: ${error.message}`)
  }

}

