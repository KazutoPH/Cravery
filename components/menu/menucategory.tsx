"use client"

import { categoryProps } from '@/types';
import React, { useState } from 'react';
import Foods from './foods';

interface MenuCategoryProps {
  categories: categoryProps[];
}

const MenuCategory = ({ categories }:MenuCategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<categoryProps>(categories[0])
  return (
    <div className='flex'>
      <div>
        <ul className='flex flex-col gap-2 flex-shrink'>
          {categories.map((menu:categoryProps, i:number) =>
            <li 
            className={`${menu.categoryName === selectedCategory.categoryName ? 'bg-white text-primary': 'bg-primary text-white'} p-4 hover:cursor-pointer rounded-tl-md rounded-bl-md`} 
            key={i}
            onClick={()=> setSelectedCategory(categories[i])}>
              <p className='text-lg font-semibold'>
                {menu.categoryName}
              </p>
            </li>
          )}
        </ul>
      </div>
      <Foods selectedCategory={selectedCategory}/>
    </div>
  );
};

export default MenuCategory;