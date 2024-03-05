import MenuCategory from '@/components/menu/menucategory'
import { getCategories } from '@/lib/actions/product.actions'
import React from 'react'

async function page() {
  const categories = JSON.parse(JSON.stringify(await getCategories()));
  
  console.log(categories)
  return (
    <main className='w-full py-5 flex justify-center'>
      <div className='content-container'>
        <MenuCategory
          categories={categories}
        />
      </div>
    </main>
  )
}

export default page