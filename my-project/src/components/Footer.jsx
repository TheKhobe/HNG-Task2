import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='flex md:flex-row flex-col justify-between md:space-y-0 space-y-4 md:mx-12 p-4 mt-12'>
     
     <div className='flex flex-col foot'>
     <h1 className='text-2xl'><span className='text-orange'>Carty</span>Cart</h1>
      <p>Address; 21, aminu kano, abuja.</p>
<p>Phone: +234810000000</p>
<p>Email: cartycart@gmail.com</p>
     </div>  

     <div className='flex flex-col foot'>
      <h2 className='underline'>Customer Service</h2>
      <p>Help center & FAQs</p>
<p>Transaction service</p>
<p>Terms & condition</p>
<p>Return policy</p>
<p>Track order</p>
     </div> 
     <div className='flex flex-col foot mt-12'>
      <h2 className='underline'>My Account</h2>
      <p>Delivery information</p>
<p>Privacy policy</p>
<p>Custom link</p>
     </div> 
     <div className='flex flex-col foot'>
      <h2 className='underline'>Accepted Cards</h2>
      <p>Visa</p>
<p>Mastercard</p>
<p>Americanexpress</p>
<p>Paypal</p>
<p>G Pay</p>
<p>Apple Pay</p>
     </div> 
      </div>
  )
}

export default Footer