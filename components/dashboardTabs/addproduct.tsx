"use client"

import { getCategory, addProduct } from '@/lib/actions/admin.actions';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function AddProduct() {
  const [category, setCategory] = useState('Select Category')
  const [ categoryList, setCategoryList ] = useState<any[]>([])
  const [dropdown, setDropdown] = useState(false)
  const [optionsList, setOptionslist] = useState<any[]>([])
  const [options, setOptions] = useState('')
  const [optionPrice, setOptionPrice] = useState<any>([])
  const [files, setFiles] = useState<File[]>([])
  const [showImage, setShowImage] = useState('')
  const [popup, setPopup] = useState(false)
  const [ newCatergoryName, setNewCategoryName ] = useState('')
  const [categoryError, setCategoryError] = useState (false)
  let newCategory = 'New Category'
  const ref = useRef<HTMLInputElement>(null)

    useEffect ( ()=> {
      getCategories() 
  },[])




  async function getCategories() {
    const CategoryListDB = await getCategory()

    if(CategoryListDB)
    setCategoryList(CategoryListDB)

    console.log(categoryList)
  }



  const AddPress = () => {
    let price

    if (options !== '') {

      if (optionPrice === 0 || optionPrice === undefined || optionPrice === null || optionPrice === "") {
        price = 0
      }

      else
        price = optionPrice

      const option = { option: options, addprice: price }
      setOptionslist([...optionsList, option]);
      setOptions('')
      setOptionPrice('')
      console.log(optionsList)
    }
  }

  
  const categoryPress = (category: any) => {
    console.log(category, newCategory)
    if (category === newCategory)
      setPopup(true)

    else
      setCategory(category)
  }

  const addCatergoryPress = () => {

    let text = newCatergoryName.replace(/ /g, '')
    if( text === '')
    setCategoryError(true)

    else {
      setCategoryList( array =>  [...categoryList, { categoryName: newCatergoryName }] )
      setPopup(false)
    }

    console.log(categoryList)
  }

  const submitPress = async (e: any) => {
    e.preventDefault()
    
    await addProduct({
      name: e.target.productname.value,
      description: e.target.description.value,
      category: category,
      price: e.target.price.value,
      options: optionsList
    })

    console.log('save press')
  }


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const fileReader = new FileReader();

    // check if image selected
    if (e.target.files && e.target.files.length > 0) {

      const file = e.target.files[0]

      console.log('size is: ', Math.round((file.size / 1024)))
      if (Math.round((file.size / 1024)) > 4096) {
        alert('image must be less than 4mb')
        return
      }

      // set selected image to files refer to const = files
      setFiles(Array.from(e.target.files));

      // if file is not image abort function
      if (!file.type.includes('image')) return

      // get string value of image 
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';

        // change image on form display
        setShowImage(imageDataUrl);
      }

      fileReader.readAsDataURL(file);
    }
  }

  const removePress = (i: any) => {
    setOptionslist(optionsList.filter((opt, id) => (i != id)));
  }

  return (
    <div className='flex flex-col bg-white w-full px-5'>
      <p className='self-center text-3xl text-dark font-extrabold'>Add Product</p>

      <form className='mt-5'
      onSubmit={submitPress}>
        <div className='flex flex-col gap-5'>

          <div className='flex flex-col gap-2 justify-center place-self-start items-center'>
            <div className='relative h-[200px] w-[200px] border border-[#d3d3d3] rounded-md overflow-hidden'>
              {showImage ? (
                <Image
                  src={showImage}
                  alt="upload"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              ) : (
                null
              )}
            </div>
            <div className='flex relative overflow-hidden w-full'>
              <button type='button'
                onClick={() => {
                  if (showImage !== '') { setShowImage(''), setFiles([]) }

                  else {
                    if (ref.current)
                      ref.current.click()
                  }
                }}
                className='bg-primary py-[5px] px-3 rounded-md text-base font-bold text-white relative w-full'>
                {`${showImage !== '' ? 'Remove Image' : 'Upload Image'}`}
              </button>
              <input
                ref={ref}
                onChange={(e) => handleImage(e)}
                type='file'
                accept='image/*'
                className='absolute w-full h-full opacity-0 hidden'
              />
            </div>
          </div>


          <div className='flex gap-2'>
            <div className='flex flex-col flex-1'>
              <p className='font-semibold'>Name</p>
              <input name='productname' id='productname' className='border border-[#d3d3d3] py-1 px-2 rounded-md outline-none focus-within:border-primary' />
            </div>

            <div className='flex relative flex-col flex-1 overflow-visible hover:cursor-pointer focus-within:border-primary'
              onClick={() => { setDropdown(!dropdown) }}>
              <p className='font-semibold'>Catergory</p>
              <div className={`flex justify-between border py-1 px-2 ${dropdown ? 'rounded-tl-md rounded-tr-md border-primary' : 'rounded-md border-[#d3d3d3]'} outline-none items-center`}>
                <p className='text-base text-dark font-medium'>{category}</p>
                {dropdown ? (
                  < FaAngleUp />
                ) :
                  < FaAngleDown />
                }
              </div>

              {dropdown && (
                <div className='absolute w-full top-[57px] shadow-md bg-white border border-primary border-t-0 rounded-bl-md rounded-br-md z-10'>
                  <ul className='flex flex-col gap-1'>
                    {categoryList.map((cat, i) =>
                      <li className='text-dark font-medium  px-2 hover:bg-primary hover:text-white' onClick={() => categoryPress(cat.categoryName)} key={i}>{cat.categoryName}</li>
                    )}
                    <li className='text-dark font-medium  px-2 hover:bg-primary hover:text-white' onClick={() => categoryPress(newCategory)}>{newCategory}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>


          <div className='flex flex-col'>
            <p className='font-semibold'>Description</p>
            <textarea name='description' id='description' className='border border-[#d3d3d3] py-1 px-2 rounded-md outline-none h-[150px] focus-within:border-primary' />
          </div>

          <div className='flex flex-col flex-1'>
            <p className='font-semibold'>Price</p>
            <div className='flex flex-1 border border-[#d3d3d3] py-1 px-2 rounded-md focus-within:border-primary'>
              <p className='text-base font-medium'>₱</p>
              <input name='price' id='price' type='number' className='outline-none flex-1 ml-2' />
            </div>

          </div>

          <div className='flex flex-1 flex-col gap-3'>
            <div className='flex flex-1 gap-2 items-end'>
              <div>
                <p className='font-semibold'>Options</p>
                <input
                  className='border border-[#d3d3d3] py-1 px-2 rounded-md outline-none focus-within:border-primary'
                  value={options}
                  onChange={(e: any) => setOptions(e.target.value)}
                />
              </div>

              <div>
                <p className='font-semibold'>Additional Price</p>
                <input type='number'
                  className='border border-[#d3d3d3] py-1 px-2 rounded-md outline-none focus-within:border-primary'
                  value={optionPrice}
                  onChange={(e: any) => setOptionPrice(e.target.value)}
                />
              </div>

              <button type='button'
                onClick={() => AddPress()}
                className='bg-primary py-[5px] px-3 rounded-md text-base font-bold text-white'>
                Add Option
              </button>
            </div>

            <div className='flex gap-3 flex-wrap'>
              {optionsList && (
                optionsList.map((opt, i) =>
                  <div className='flex gap-2 bg-primary py-[5px] px-3 rounded-md items-center' key={i}>
                    <p className='text-base font-bold text-white'>{`${opt.option} (+₱${opt.addprice})`}</p>
                    <FaXmark
                      className='hover:cursor-pointer'
                      color='white'
                      size={20}
                      onClick={() => removePress(i)}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className='self-center'>
            <button type='submit'
              onClick={() => AddPress()}
              className='bg-primary py-[5px] px-3 rounded-md text-base font-bold text-white'>
              Save Product
            </button>
          </div>

        </div>
      </form>

      {popup && (
        <div className='darkbg'>
          <div className='bg-white rounded-md w-full max-w-sm px-5 py-10 flex flex-col gap-3 relative'>

            <FaXmark
              className='hover:cursor-pointer absolute right-4 top-4'
              size={20}
              onClick={() => {
                setPopup(false)
                setCategoryError(false)
                setNewCategoryName('')
              }}
            />

            <div className='flex flex-col flex-1'>
              <p className='font-semibold'>Category Name</p>
              <input className='border border-[#d3d3d3] py-1 px-2 rounded-md outline-none focus-within:border-primary' 
              onChange={(e) => setNewCategoryName(e.target.value)}/>
              {categoryError && (<p className='font-normal text-sm text-primary'>please fill up the field!</p>)}

            </div>

            <div className='w-full'
            onClick={()=> addCatergoryPress()}>
              <button type='button' className='bg-primary py-[5px] px-3 rounded-md text-base font-bold text-white w-full'>
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddProduct