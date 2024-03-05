import React from 'react'

const SelectionContainer = (name: string, customFunction: Function, selectedTab: string, key:number) => {
  return (
    <div
    className={`${name === selectedTab ? 'bg-white text-primary' : 'bg-primary text-white'} p-4 hover:cursor-pointer rounded-tl-md rounded-bl-md`}
    key={key}
    onClick={customFunction()}>

    <p className='text-lg font-semibold'>
      {name}
    </p>
  </div>
  )
}

export default SelectionContainer