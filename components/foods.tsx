import { getProductsByCategory } from '@/lib/actions/product.actions'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

 function Foods(menuId:any) {

  useEffect ( ()=> {
    getProducts() 
},[menuId])

async function getProducts() {
  console.log(menuId)
  const ProductList = await getProductsByCategory(menuId.categoryId)
  console.log(ProductList)
}

  return (
    <div className='flex flex-col flex-1 px-5'>
      <p className='text-3xl text-dark font-extrabold'>Burger</p>
      <div className='gridcontainer w-full mt-5'>


        
        {/* <div className='flex flex-col just items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-cover'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-contain'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-contain'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-contain'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-contain'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex flex-col shadow-md shadow-[#808080] rounded-md w-[250px]'>
            <div className='w-full relative h-[170px]'>
              <Image
                src='/assets/beefburger.webp'
                alt=''
                fill
                className='object-contain'
              />
            </div>

            <div className='w-full p-2 bg-primary'>
              <p className='text-white font-semibold text-lg'>Shawarma</p>
              <p className='text-white font-medium text-base'>P 75</p>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>

  )
}

export default Foods