import React from 'react'
import Buy from '../assets/images/Vector (6).png'
import '../components/Section.css'
import Socials from '../assets/images/Group 30.png'
import Safe from '../assets/images/Vector (7).png'
import Value from '../assets/images/Vector (8).png'
import Free from '../assets/images/Vector (9).png'
import Footer from './Footer'
function Section() {
  return (
   <>
   <div className='flex border-t md:mx-12 mx-2 border-gray md:justify-center'>
    <div className='md:flex md:flex-row md:block hidden grid grid-cols-2 md:space-x-6'>
<div className='border-r border-gray p-6'>
<img src={Buy} alt='buy' className='mx-auto' />
 <h1 className='text-center'>Buyers Protection</h1>
 <p className='text-center hold'>Get a refund of item if item arrives late, damaged or not described as below</p>
</div>
<div className='border-r border-gray p-6'>
<img src={Safe} alt='buy' className='mx-auto'/>
 <h1 className='text-center underline'>Safe Payment</h1>
 <p className='text-center hold'>Safe payment methods preferred by international shoppers or buyers</p>
</div>
<div className='border-r border-gray p-6'>
<img src={Value} alt='buy' className='mx-auto' />
 <h1 className='text-center underline'>Value for money</h1>
 <p className='text-center hold'>We offer the best price for great quality of all our items.</p>
</div>
<div className='p-6'>
<img src={Free} alt='buy' className='mx-auto'/>
 <h1 className='text-center underline'>Free shipping</h1>
 <p className='text-center hold'>Get free shipping world wide on some specific items and items more than N100,000.</p>
</div>
    </div>
     <div className='md:flex md:hidden md:flex-row grid grid-cols-2 md:space-x-6'>
<div className='border border-gray p-6'>
<img src={Buy} alt='buy' className='mx-auto' />
 <h1 className='text-center underline'>Buyers Protection</h1>
 <p className='text-center hold'>Get a refund of item if item arrives late, damaged or not described as below</p>
</div>
<div className='border border-gray p-6'>
<img src={Safe} alt='buy' className='mx-auto'/>
 <h1 className='text-center'>Safe Payment</h1>
 <p className='text-center hold'>Safe payment methods preferred by international shoppers or buyers</p>
</div>
<div className='border border-gray p-6'>
<img src={Value} alt='buy' className='mx-auto' />
 <h1 className='text-center'>Value for money</h1>
 <p className='text-center hold'>We offer the best price for great quality of all our items.</p>
</div>
<div className='p-6 border border-gray'>
<img src={Free} alt='buy' className='mx-auto'/>
 <h1 className='text-center'>Free shipping</h1>
 <p className='text-center hold'>Get free shipping world wide on some specific items and items more than N100,000.</p>
</div>
    </div>
    </div>
    <div className='bg-orange p-4 mt-12 flex md:flex-row w-full flex-col md:items-center md:justify-between space-y-4'>
<h2 className='text-white'>Sign Up to our newsletter</h2>
<input type='text' placeholder='Enter Your Email' className='border text-white px-12 py-2'/>
<div className='socials flex flex-row'>
<img src={Socials} alt='socials' />
</div>
    </div>
    <Footer />
    </>
  )
}

export default Section