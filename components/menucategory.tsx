"use client"

import { menuList } from '@/constants'
import React, { useState } from 'react'
import Foods from './foods'

function MenuCategory(categories:any) {
  const [category, setCategory] = useState('Bundle')
  const [menuId, setMenuId] = useState()
  
  return (
    <div className='flex'>
      <div>
        <ul className='flex flex-col gap-2 flex-shrink'>
          {categories.categories.map((menu:any, i:any) =>
            <li 
            className={`${menu.categoryName === category ? 'bg-white text-primary': 'bg-primary text-white'} p-4 hover:cursor-pointer rounded-tl-md rounded-bl-md`} 
            key={i}
            onClick={()=> {
              setCategory(menu.categoryName)
              setMenuId(menu._id)
             }}>

              <p className='text-lg font-semibold'>
                {menu.categoryName}
              </p>
            </li>
          )}
        </ul>
      </div>
      <Foods categoryId={menuId}/>
    </div>

  )
}

export default MenuCategory