import { getProductsByCategory } from '@/lib/actions/product.actions'
import { categoryProps } from '@/types'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface FoodProps {
  selectedCategory: categoryProps
}

const Foods = ({ selectedCategory }: FoodProps) => {
  const [foodList, setfoodList] = useState<any>()

  useEffect(() => {
    getProducts()
  }, [selectedCategory])

  async function getProducts() {
    const ProductList = await getProductsByCategory(selectedCategory._id)
    if (ProductList) {
      setfoodList(ProductList)
    }
    console.log(foodList)

  }

  return (
    <div className='flex flex-col flex-1 px-5'>
      <p className='text-3xl text-dark font-extrabold'>{selectedCategory.categoryName}</p>
      <div className='gridcontainer w-full mt-5 px-5'>
        {foodList && foodList.products?.length > 0 && (
          foodList.products.map((data: any, i: any) =>
            <div className='flex flex-col just items-center' key={i}>

              <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-full'>
                <div className='w-full relative aspect-[5/3]'>
                  <Image
                    src='/assets/beefburger.webp'
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>

                <div className='w-full p-2 bg-primary'>
                  <p className='text-white font-bold text-xl'>{data.productName}</p>
                  <p className='text-white font-semibold text-lg'>₱ {data.price}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>

  )
}

export default Foods