import React from 'react'
import Front from '../assets/images/front.png'
import homeimage from '../assets/images/Home.png'
import cardimage from '../assets/images/card.png'
import apple from '../assets/images/apple.png'
import Master from '../assets/images/logos_mastercard.png'
import Frame from '../assets/images/Frame 14.png'
import Category from '../assets/images/categoria.png'
import Frame2 from '../assets/images/Frame 180.png'
import Phone from '../assets/images/phone.png'
import Like from '../assets/images/Haw.png'
import Van from '../assets/images/Vector (3).png'
import Arr from '../assets/images/Frame 167.png'
import Fed from '../assets/images/Frame 182.png'
import Cart from '../assets/images/bi_cart-fill.png'
import '../pages/Check.css'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
function Checkout() {
  return (
   <>
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
<Link to='/'><h1 className='text-3xl text-white md:mx-10 md:ml-0 ml-10'><span className='text-orange'>Carty</span>Cart</h1></Link>
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
<div className='flex flex-row justify-between mt-10 mx-20 md:hidden block'>
  
  <img src={Fed} alt='fed' />
  <img src={Arr} alt='arr'/>
</div>
</div>

    </div>




   <div className='flex flex-row md:space-x-24 mt-12 mx-36 md:block hidden'>
   <div className='flex flex-row space-x-24'>
    <h2 className='flex flex-row items-center'>Cart <img src={Front} alt='front'/> </h2>
    <h2 className='flex flex-row items-center'>Information  <img src={Front} alt='front'/> </h2>
    <h2 className='flex flex-row items-center'>Payment  <img src={Front} alt='front'/> </h2>
    <p className='text-gray'>Complete order</p>
    <h1 className='text-zite'>Shipping</h1>
   </div>
   </div>
    <h1 className='text-zite md:hidden block md:mx-0 mx-12 md:pt-0 pt-8'>Order Confirmation</h1>
    <div className='flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-6 mx-12 md:mx-20'>
     <div className='border border-black p-4 flex flex-col space-y-14 md:w-[771px] w-[408px] md:h-[991px]'>
<p className='mx-12'>Payment methods</p>
<div className='flex flex-row space-x-6 md:mx-12'>
 <div className='bg-new md:w-[160px] w-[82px] h-[57px] md:h-[106px] p-4 rounded-md hover:border-orange hover:border-2'>
 <img src={homeimage} alt='homeimage' className='mx-auto md:w-[24px] w-[12.74px]'/>
 <p className='text-center'>Bank</p>
 </div>
 <div className='bg-new md:w-[160px] w-[82px] h-[57px] md:h-[106px] rounded-md p-4 hover:border-orange hover:border-2'>
 <img src={cardimage} alt='homeimage' className='mx-auto md:w-[24px] w-[12.74px]'/>
 <p className='text-center'>Card</p>
 </div>
 <div className='bg-new md:w-[160px] w-[82px] h-[57px] md:h-[106px] rounded-md p-4 hover:border-orange hover:border-2'>
 <img src={apple} alt='homeimage' className='mx-auto md:w-[24px] w-[12.74px]' />
 <p className='text-center'>Pay</p>
 </div>
 <div className='bg-white border-2 border-orange rounded-md md:w-[160px] md:h-[106px] w-[82px] h-[57px] p-4 '>
 <p className='text-center text-orange font-bold py-2'>More</p>
 </div>
</div>
<div className='flex flex-col space-y-4 md:mx-12'>
 <h3>Name on Card</h3>
 <div className='flex flex-row items-center'>
 <input type='text' className='border border-black px-2 md:w-[650px] md:h-[106px] w-[368px] rounded-md py-4' placeholder='Rosalind Jacobs'/><img src={Master} alt='mastercard' className='relative md:-ml-20 -ml-8 -px-4'/></div>
 <h3>Card Number</h3>
 <div className='flex flex-row items-center'>
 <input type='text' className='border border-black px-4 md:w-[650px] md:h-[106px] w-[366px] rounded-md py-4' placeholder='4444 8239 5656 7272'/></div>
 <div className='flex flex-row justify-between'>
 <div className='flex flex-col'>
 <h3 className='text-2xl'>Expiry Date</h3>
 <input type='text' className='border border-black md:px-12 w-[161px] md:w-[312px] h-[59px] md:h-[106px] rounded-md' placeholder='09/2025'/></div>
 <div className='flex flex-col'>
 <h3>CVC</h3>
 <input type='text' className='border border-black px-12 w-[161px] md:w-[312px] h-[59px] md:h-[106px] rounded-md' placeholder='131'/></div>
 </div>
 <div className='flex space-x-2'>
 <input type='checkbox'/> <p className='save'>Save my card for future use</p>
 </div>
</div>

 <div className='mx-auto'>
  <button className='bg-orange text-white md:w-[388px] h-[40px] w-[188.7px] md:h-[81px]'>Buy Now</button>
 </div>
     </div>
     <div className='border border-black p-4 md:w-[474px] w-[415px] h-[709px]'>
     <div className='md:p-4 space-y-4'>
<h4>Shipping Details</h4>
<p className='hold'>No 12, Goodluck Jonathan, Royal Estate Asokoro, Abuja Nigeria.</p>
<p className='hold'>Contact - 08149494949</p>
</div>
<hr/>
<div className='p-4 h-[156px]'>
<h5>Order details</h5>
<div className='flex flex-col p-4 space-y-4'>
 <div className='flex flex-row justify-between items-center'>
  <p className='hold'>Adidas</p>
  <p className='hold'>1</p>
  <p className='hold'>N65,000</p>
 </div>
 <div className='flex flex-row justify-between items-center'>
  <p className='hold'>New Balance</p>
  <p className='-ml-10 hold'>1</p>
  <p className='hold'>N38,000</p>
 </div>
 <div className='flex flex-row justify-between'>
  <p className='hold'>Adidas</p>
  <p className='hold'>1</p>
  <p className='hold'>N58,500</p>
 </div>
</div>
</div>
<hr/>
<div className='p-6 space-y-6'>
 <h5>Item Total</h5>
 <div className='flex flex-row items-center justify-between'>
  <p className='hold'>Discount</p>
  <span className='hold'>N0.00</span>
  </div>
 <div className='flex flex-row items-center justify-between'>
  <p className='hold'>Delivery</p>
  <span className='hold'>N5,000</span>
  </div>
 <div className='flex flex-row items-center justify-between'>
  <p className='hold'>Tax</p>
  <span className='hold'>N3,000</span>
  </div>
 <div className='flex flex-row items-center justify-between'>
  <p className='hold'>Discount</p>
  <span className='hold'>N0.00</span>
  </div>
 <div className='flex flex-row items-center justify-between'>
  <h5>Total Bill</h5>
  <h5>N175,000</h5>
  </div>
</div>
     </div>
    </div>
<div className='mt-20'>
    <Section/>
    </div>
    <Link to='/'>Back to home</Link>
    </>
  )
}

export default Checkout