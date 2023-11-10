"use client"

import { menuList } from '@/constants'
import React, { useState } from 'react'
import Foods from './foods'

function MenuCategory() {
  const [category, setCategory] = useState('Bundle')
  
  return (
    <div className='flex'>
      <div>
        <ul className='flex flex-col gap-2 flex-shrink'>
          {menuList.map((menu, i) =>
            <li 
            className={`${menu.name === category ? 'bg-white text-primary': 'bg-primary text-white'} p-4 hover:cursor-pointer rounded-tl-md rounded-bl-md`} 
            key={i}
            onClick={()=> setCategory(menu.name)}>

              <p className='text-lg font-semibold'>
                {menu.name}
              </p>
            </li>
          )}
        </ul>
      </div>
      <Foods/>
    </div>

  )
}

export default MenuCategory