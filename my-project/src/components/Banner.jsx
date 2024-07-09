import React from 'react'
import { Link } from 'react-router-dom'
import Frame from '../assets/images/Frame 14.png'
import Category from '../assets/images/categoria.png'
import Frame2 from '../assets/images/Frame 180.png'
import Phone from '../assets/images/phone.png'
import Like from '../assets/images/Haw.png'
import Van from '../assets/images/Vector (3).png'
import Cart from '../assets/images/bi_cart-fill.png'
function Banner() {
  return (
    <div className='bg-orange md:w-full w-full'>
    <div className='flex justify-between flex-row items-center md:mx-12 py-2'>
      <span className='border border-white text-white mx-4 md:p-4 p-2'>Download app</span>
      <div className='flex flex-row items-center mx-6 space-x-4 md:hidden text-white block'>
      <img src={Cart} alt='cart' />
      <img src={Like} alt='like'/>
        <a href='#'>Help</a>
      </div>
      <div className='md:block hidden'>
      <div className='flex flex-row items-center space-x-4'>
      <div className='flex flex-row items-center'>
      <img src={Van} alt='van' />
      <a href='#' className='text-white'>Fast Delivery</a>
      </div>
      <a href='#' className='text-white'>Help</a>
      <div className='flex flex-row items-center'>
      <img src={Like} alt='like' />
      <a href='#' className='text-white'>Wishlist</a>
      </div>
      </div>
    </div>
    </div>
<div className='bg-new-gray h-[290px] flex flex-col'>
<div className='flex flex-row items-center mt-6 py-2 md:justify-between justify-evenly'>
<Link to='/'><h1 className='text-3xl text-white md:mx-10 md:ml-4 ml-10'><span className='text-orange'>Carty</span>Cart</h1></Link>
<img src={Frame} alt='image' className='md:block hidden ml-48'/>
<div className='flex mx-12'>
<div className='button md:w-[215px] w-[163px] md:h-[59px] md:-ml-4 ml-14 h-[39px] md:px-12 py-2 px-4 md:py-4 bg-orange text-white'>SignIn/SignUp</div>
</div>

</div>
<img src={Frame2} alt='mobiFram' className='md:hidden mx-12 block w-[397px]'/>
<div className='flex flex-row mt-12 items-center space-x-20'>
<div className='bg-orange md:w-[300px] w-[172px] md:h-[69px] h-[47px] flex flex-row items-center justify-evenly'>
<h3 className='text-white'>Categories</h3>
  <img src={Category} alt='grijd' className='md:w-[29px] md:h-[24px] w-[20px] h-[20px]' />
</div>
<div className='flex flex-row space-x-4 text-white md:block hidden'>
<a href='#'>Home</a>
<a href='#'>Fashion</a>
<a href='#'>Electronics</a>
<a href='#'>Health and Beauty</a>
<a href='#'>Sports</a>
<a href='#'>More</a>
</div>
<div className='flex flex-row md:hidden block space-x-4 text-white'>
<a href='#'>Home</a>
<a href='#'>Fashion</a>
<a href='#'>More</a>
</div>

<div className='md:block hidden'>
<div className='border-l border-white flex flex-row items-center'>
  <img src={Phone} alt='phonenumber'/>
  <p className='text-white'>+23481000000</p>
</div>
</div>

</div>
</div>

    </div>
  )
}

export default Banner