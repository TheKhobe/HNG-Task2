import React from 'react'
import Down from '../assets/images/down.png'
import Up from '../assets/images/up.png'
import X from '../assets/images/X.png'
import { Link } from 'react-router-dom'
function Filter() {
  return (
      <div className='flex flex-col p-4 space-y-4 md:hidden block'>
      <div className='flex flex-row items-center justify-between'>
     <h1 className='text-2xl'>Filter</h1>
     <Link to='/'><img src={X} alt='Ximage' /></Link>
     </div>
     <div className='flex flex-row space-x-4 items-center mt-2'>
     <div className='px-4 py-2 w-[129px] border border-black space-x-4 flex flex-row items-center'>
     <img src={X} alt='Ximage' />
    <p>Unisex</p>
     </div>
     <div className='px-4 py-2 w-[129px] border border-black space-x-4 flex flex-row items-center'>
     <img src={X} alt='Ximage' />
    <p>All</p>
     </div>
     </div>
     <div className='flex flex-col'>
      <div className='bg-pink border border-black flex flex-row items-center justify-between p-2'>
      Brands
      <img src={Down} alt='right' className='mx-12' />
      </div>
      <div className='bg-white border border-black h-[294px] w-full flex flex-col space-y-4 py-2'>
      <div className='flex flex-row mt-4'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> All</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Adidas</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Puma</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Nike</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Zara</div>
 </div>
     </div>
        <div className='flex flex-col'>
      <div className='bg-pink border border-black flex flex-row items-center justify-between p-2'>
      Price
     <img src={Down} alt='right' className='mx-12' />
      </div>
      <div className='bg-white border border-black h-[294px] w-full flex flex-col space-y-4 py-2'>
      <div className='flex flex-row mt-4'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Below N30,000</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Below N40,000</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Below N80,000</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Below N80,000</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Below N100,000</div>
 </div>
     </div>
        <div className='flex flex-col'>
     <div className='bg-pink border border-black flex flex-row items-center justify-between p-2'>
      Type
      <img src={Down} alt='right' className='mx-12' />
      </div>
          <div className='bg-white border border-black h-[294px] w-full flex flex-col space-y-4 py-2'>
      <div className='flex flex-row mt-4'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Boys</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Girls</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Female</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Male</div>
      <div className='flex flex-row'>
       <input type='checkbox' className='w-[39px] h-[30px]'></input> Unisex</div>
 </div>
     </div>
     <div className='bg-pink border border-black justify-between flex flex-row items-center p-2'>
      Color
      <img src={Up} alt='right' className='mx-12' />
      </div>
     <div className='bg-pink border flex flex-row justify-between items-center border-black p-2'>
      Discount
      <img src={Up} alt='right' className='mx-12' />
      </div>
      <button className='bg-orange text-white p-2'>Apply Filters</button>
    </div>
   
  )
}

export default Filter