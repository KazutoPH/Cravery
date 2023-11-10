"use client"

import { DashBoard, menuList } from '@/constants'
import React, { useState } from 'react'
import Foods from './foods'
import AddProduct from '@/components/dashboardTabs/addproduct'
import OrderList from '@/components/dashboardTabs/orderlist'

function DashBoardTab() {
  const [category, setCategory] = useState('Orders')
  const [Tab, setTab] = useState()

  return (
    <div className='flex h-full'>
      <ul className='flex flex-col gap-2 flex-shrink'>
        {DashBoard.map((tab, i) =>
          <li
            className={`${tab.name === category ? 'bg-white text-primary' : 'bg-primary text-white'} p-4 hover:cursor-pointer rounded-tl-md rounded-bl-md`}
            key={i}
            onClick={() => setCategory(tab.name)}>

            <p className='text-lg font-semibold'>
              {tab.name}
            </p>
          </li>
        )}
      </ul>

      <div className='flex flex-1'>
        {DashBoard.map((tab, i) =>
          tab.name === category && (
            <div className='w-full' key={i}>
            {tab.tabpage}
            </div>  

          )
        )}
      </div>

    </div>
  )
}

export default DashBoardTab