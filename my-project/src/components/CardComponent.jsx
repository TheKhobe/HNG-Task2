import React from 'react'
import Vec1 from '../assets/images/Vector (1).png'
import Vec from '../assets/images/Vector.png'
import Stars from '../assets/images/Group 35.png'
import Green from '../assets/images/green.png'
import Sneak from '../assets/images/sneaks.png'
import Gride3 from '../assets/images/grid3.png'
 import Gride4 from '../assets/images/grid4.png'
import Gride5 from '../assets/images/grid5.png'
 import Gride6 from '../assets/images/grid6.png'
 import Gride7 from '../assets/images/grid7.png'
 import Gride8 from '../assets/images/grid8.png'
 import Gride9 from '../assets/images/grid9.png'
 import Gride10 from '../assets/images/grid10.png'
 import Gride11 from '../assets/images/grid11.png'
 import Gride12 from '../assets/images/grid12.png'
 import Gride13 from '../assets/images/grid13.png'
 import Gride14 from '../assets/images/grid14.png'
 import Gride15 from '../assets/images/grid15.png'
 import Gride16 from '../assets/images/grid16.png'
 import Fres from '../assets/images/fre.png'
 import Up from '../assets/images/desty.png'
 import Group from '../assets/images/Group 54.png'
 import { Link } from 'react-router-dom'
 import '../components/Card.css'
function CardComponent() {
  return (
    <>
    <div className='flex flex-col md:p-4 p-2 space-y-4'>
    <div className='flex flex-row md:hidden block items-center mx-6 space-x-4'>
 <a href='#' className='underline hover:text-orange'>Hottest deals</a>
    <a href='#' className='underline hover:text-orange'>Fast Selling</a>
    <a href='#' className='underline hover:text-orange'>Free Shipping</a>
    </div>
   
    <div className='flex flex-row justify-between mx-6 items-center'>
    <h2 className='md:hidden block'>Unisex Sneakers</h2>
    <Link to='/filter'><p className='md:hidden block'>Filters</p></Link>
    </div>
    <div className='flex md:flex-row flex-col md:items-center mx-2 md:justify-between md:mx-6'>
    <h1 className='font-bold mt-8 mx-4'>Showing 1 to 20 products of 50</h1>
    <div className='flex md:flex-row'>
    <div className='border border-black mt-8 md:w-[404px] flex flex-row items-center justify-between w-full'>
      <h1 className='py-2 px-4 default'>Default Sorting</h1>
      <img src={Up} alt='aler'  className='mx-12'/>
    </div>
    <div className='border border-black mt-8 flex flex-row py-2 items-center space-x-6 px-4'>
      <img src={Vec1} alt='vec1' />
      <img src={Vec} alt='vec1' className='px-4' />
    </div>
    </div>
    </div>
    <Link to='/cart'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8 md:p-4 p-2'>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
        <img src={Group} alt='welcome' className='float-right'/>
        <img src={Green} alt='green shoe'/>
         <div className='bg-pink py-[2.5px] -mt-32'>
         <h2 className='text-center'>Adidas Sporty</h2>
         <h3 className='text-orange text-center'>N29,000</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
       <img src={Group} alt='welcome' className='float-right'/>
        <img src={Sneak} alt='sneakers2' className='md:w-[200px] w-[163px]'/>
           <div className='bg-pink py-[2px] md:-mt-[40px] -mt-[30px]'>
         <h2 className='text-center'>Zara Unisex</h2>
         <h3 className='text-orange text-center'>N38,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
       <img src={Group} alt='welcome' className='float-right'/>
        <img src={Gride3} alt='grid3' className='md:w-[200px] w-[163px]'/>
         <div className='bg-pink py-[2.5px] md:-mt-[100px] -mt-[80px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
       <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride4} alt='grid4' className='md:w-[230px] w-[163px]'/>
           <div className='bg-pink py-[2.5px] md:-mt-32 -mt-[40px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
        <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride5} alt='grid5' className='md:w-[205px] w-[163px]' />
            <div className='bg-pink py-[2.5px] md:-mt-12 -mt-[24px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
      <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
        <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride6} alt='grid6' className='md:w-[240px] w-[163px]' />
             <div className='bg-pink py-[4.5px] md:-mt-20 -mt-[10px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride7} alt='grid7' className='md:w-[240px] w-[163px]'/>
           <div className='bg-pink py-[2.5px] md:-mt-32 -mt-10'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride8} alt='grid8' className='md:w-[250px] w-[163px]'/>
           <div className='bg-pink md:mt-0 mt-[52px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride9} alt='grid9' />
            <div className='bg-pink py-[2.5px] md:-mt-10 -mt-32'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride10} alt='grid10' />
            <div className='bg-pink py-[2.5px] md:-mt-10 -mt-36'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride11} alt='grid11' className='md:w-[200px] w-[163px]'/>
           <div className='bg-pink md:-mt-16 -mt-[60px] py-[2.5px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride12} alt='grid12' className='md:w-[200px] w-[163px]'/>
            <div className='bg-pink -mt-8 py-[2px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride13} alt='grid13' className='md:w-[200px] w-[170px]'/>
         <div className='bg-pink -mt-12'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride14} alt='grid14' className='md:w-[200px] w-[163px]'/>
           <div className='bg-pink py-[2.5px] -mt-12'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride15} alt='grid15' className='md:w-[200px] w-[163px]'/>
            <div className='bg-pink py-[2.5px] -mt-12'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
          <div className='border border-black md:w-[235px] w-[200.47px] md:h-[294px] h-[250.8px]'>
            <img src={Group} alt='welcome' className='float-right'/>
         <img src={Gride16} alt='grid16' className='md:w-[200px] w-[163px]' />
          <div className='bg-pink py-[2px]'>
         <h2 className='text-center'>Puma Zuma</h2>
         <h3 className='text-orange text-center'>N45,500</h3>
         <img src={Stars} alt='stars' className='mx-auto'/>
         </div>
      </div>
    
    </div>
    </Link>
      <div className='flex flex-row items-center mt-20 justify-center space-x-2'>
        <div className='px-4 py-2 bg-black text-white font-bold border border-black'>1</div>
        <div className='px-4 py-2 font-bold border border-black'>2</div>
        <div className='px-4  py-2 font-bold border border-black'>3</div>
        <div className='px-4 py-2 font-bold border border-black'>4</div>
        <div className='text-4xl font-bold'> <img src={Fres} alt='frontarrow' /> </div>
      </div>
    </div>
    </>
  )
}

export default CardComponent