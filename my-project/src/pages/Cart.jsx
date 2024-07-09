import React from 'react'
import Vec from '../assets/images/Vector.png'
import { Link } from 'react-router-dom'
import Vec1 from '../assets/images/Vector (1).png'
import Vec2 from '../assets/images/Vector (2).png'
import Whites from '../assets/images/secshoe.png'
import Right from '../assets/images/whites.png'
import Black from '../assets/images/blackshoe.png'
import Heart from '../assets/images/weui_like-filled.png'
import Arr from '../assets/images/Frame 167.png'
import Fed from '../assets/images/Frame 182.png'
import Banner from '../components/Banner'
import '../components/Cart.css'
import Section from '../components/Section'
function Cart() {
  return (
    <>
        <Banner />
   <div className='flex md:flex-row flex-col md:space-x-24 space-y-4 p-4'>
   <div className='flex flex-col'>
    <div className='flex flex-row md:space-x-96 space-x-40 md:mt-0 mt-6'>
     <h1>Showing 3 out of 3 items</h1>
     <div className='flex space-x-4'>
     <img src={Vec1} alt='vec1' />
     <img src={Vec} alt='vec' />
     </div>
     </div>
     <div className='border border-black space-y-4'>
      <div className='flex flex-row space-x-4 items-center'>
       <img src={Whites} alt='firs' className='md:w-[230px] w-[113px] md:h-[294px] h-[197px] border border-black mt-4 ml-2' />
       <div className='flex flex-col md:space-y-6 space-y-2'>
       <div className='bg-pink gy mt-4 md:h-[207px] md:w-[498px] w-[295px] h-[167px]'>
       <div className='flex md:flex-row flex-col'>
       <div className='flex flex-col gy md:p-6'>
        <h1>Adidas Sporting Unisex</h1>
        <div className='flex flex-row space-x-4'><p>Size 42</p> <p> Color:White</p></div>
        <p>Qty -1  <button type='button' className='bg-white'>+ -</button> </p>
        <p>Expected Arrival Date: 2 weeks from date of purchase</p> 
       </div>
       <h2 className='text-orange md:mx-4 md:p-6'>N68,500</h2>
       </div> 
        
       </div>
       <div className='flex flex-row justify-between'>     
           <button className='flex flex-row bg-orange md:w-[210px] md:h-[58px] w-[115px]  h-[23px] items-center fl text-white'><img src={Heart} alt='hert' className='md:w-6 w-4'/>Add to Wishlist</button>
           <button className='flex flex-row bg-white border border-orange items-center md:w-[150px] w-[65.37px] h-[23px] md:h-[57px] fl text-orange'><img src={Vec2} alt='Vec2' className='md:w-6 w-4'/>Delete</button>
       </div>
       </div>
      </div>
      <div className='flex flex-row space-x-4 items-center'>
       <img src={Right} alt='firs' className='md:w-[230px] w-[113px] md:h-[294px] h-[197px] border border-black mt-4 ml-2' />
       <div className='flex flex-col space-y-4'>
       <div className='bg-pink p-4 mt-4 md:h-[207px] md:w-[498px] w-[295px] h-[167px]'>
       <div className='flex md:flex-row flex-col'>
       <div className='flex flex-col md:p-6'>
        <h1>Adidas Sporting Unisex</h1>
        <div className='flex flex-row space-x-4'><p>Size 42</p> <p> Color:Nude</p></div>
        <p>Qty -1  <button type='button' className='bg-white'>+ -</button> </p>
        <p>Expected Arrival Date: 2 weeks from date of purchase</p> 
       </div>
       <h2 className='text-orange md:mx-4 md:p-6'>N38,500</h2>
       </div>
        
       </div>
       <div className='flex flex-row justify-between'>     
           <button className='flex flex-row bg-orange items-center md:px-4 md:py-2 fl md:w-[210px] w-[115px] w-[115px] h-[23px] md:h-[59px] text-white'><img src={Heart} alt='hert' className='md:w-6 w-4'/>Add to Wishlist</button>
           <button className='flex flex-row bg-white border items-center border-orange md:w-[150px] w-[65.37px] h-[23px] md:h-[57px] md:px-8 md:py-2 fl text-orange'><img src={Vec2} alt='Vec2' className='md:w-6 w-4' />Delete</button>
       </div>
       </div>
      </div>
      <div className='flex flex-row space-x-4 items-center pt-2'>
       <img src={Black} alt='firs' className='md:w-[230px] w-[113px] md:h-[294px] h-[197px] border border-black p-4 ml-2' />
       <div className='flex flex-col space-y-4'>
       <div className='bg-pink p-4 mt-4 md:h-[207px] md:w-[498px] w-[295px] h-[167px]'>
       <div className='flex md:flex-row flex-col'>
       <div className='flex flex-col md:p-6'>
        <h1>Adidas Sporting Unisex</h1>
        <div className='flex flex-row space-x-4'><p>Size 42</p> <p> Color Black</p></div>
        <p>Qty -1  <button type='button' className='bg-white'>+ -</button> </p>
        <p>Expected Arrival Date: 2 weeks from date of purchase</p> 
       </div>
       <h2 className='text-orange md:mx-4 md:p-6'>N58,500</h2>
       </div>
       </div>
       <div className='flex flex-row justify-between'>     
           <button className='flex flex-row bg-orange fl items-center md:w-[210px] w-[115px] md:h-[58px] h-[23px] text-white md:px-6 md:py-2'><img src={Heart} alt='hert' className='md:w-6 w-4'/>Add to Wishlist</button>
           <button className='flex flex-row bg-white border items-center border-orange md:w-[150px] w-[65.37px] h-[23px] md:h-[57px] fl md:px-8 md:py-2 text-orange'><img src={Vec2} alt='Vec2' className='md:w-6 w-4'/>Delete</button>
       </div>
       <br/>
       </div>
      </div>
     </div>
     </div>
     <div className='flex flex-col'>
 <p>Delivery</p>
 <div className='border border-black w-full pb-6 space-y-4'>
<p className='px-12 py-2'> 2 weeks from date of purchase</p>
<div className='border border-orange p-2'>
<h1 className='font-bold text-center apply'>Apply Coupon Here</h1>
</div>
<div className='flex flex-col'>
 <p>25% off all items bought with coupons</p>
</div>
<div className='flex flex-row justify-between mx-12'>
<p> Subtotal</p>
<p>165,000</p>
</div>
<div className='flex flex-row justify-between mx-12'>
<p> Delivery</p>
<p>N0.00</p>
</div>
<div className='flex flex-row justify-between mx-12'>
<p> Discount</p>
<p>N5,000</p>
</div>
<div className='flex flex-row justify-between mx-12'>
<p> Tax</p>
<p>N3,000</p>
</div>
 <div className='flex flex-row justify-between mx-12 my-4'>
  <h5>Total</h5>
  <h5>N173,000</h5>
 </div>
 <div className='flex flex-col space-y-4'>
 
 <Link to='/check'> <button className='bg-orange text-white px-12 mx-12 py-2'>Procced to Checkout</button> </Link>
  <Link to='/check'> <button className='border border-orange px-12 text-orange py-2 mx-12'>Procced to Checkout</button> </Link>
 </div>
</div>
     </div>
   
    </div>
    <Section />
    </>
  )
}

export default Cart