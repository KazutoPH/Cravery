"use client"

import React, { useState } from 'react'
import { navList } from '../constants/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const router = usePathname();

  console.log(router)
  return (
    <div className='flex w-full justify-center'>
      <nav className='content-container py-5'>
        <div className='flex justify-between items-center'>

          <div>
            <Link href={'/'}>
            <p className='text-4xl text-primary font-extrabold'>Cravery</p>
            </Link>

          </div>
          
          <div>
          <ul className='flex gap-8'>
            {navList.map((nav, i) =>
              <li key={i}>
                <Link href={nav.route}>
                  <p className={`${router === nav.route ? 'text-primary font-extrabold':'text-dark font-semibold'} text-xl`}>{nav.name}</p>
                </Link>
              </li>
            )}
          </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar