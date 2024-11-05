import React from 'react'
import Rating from '../LAYOUT/Rateing'
import TimerCounter from '../LAYOUT/TimerCounter'

export default function Products2() {
  return (
    
    <div className=' w-full py-8 px-20  '>
      <h5 className='lg:text-4xl text-2xl py-4 font-bold'>Bomber jacket</h5>
      <h5 className='lg:flex lg:ml-0 ml-[-4rem]'> <Rating /> <span className='pt-2 px-4 text-xl hidden sm:block '>/</span> <span className='pt-2 text-red-500 font-bold lg:text-xl text-sm lg:ml-0 ml-16'>22 sold in last 2 hours</span></h5>
      <h1 className='text-orange-500 lg:text-5xl text-4xl font-bold py-5'>$42.00</h1>
      <h5 className='py-4 lg:text-xl text-sm font-semibold'>Availability: <span className='text-gray-400'><input type="radio" className='text-green-500' defaultChecked/> 14 in stock</span></h5>
      <hr />
      <p className=' w-full py-6 text-sm font-semibold text-gray-400 leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting
    <br/>industry dummy text and typesetting industry</p>

<button className='bg-red-200 text-red-600 lg:text-[18px] text-[14px] font-bold py-4 lg:pl-2 lg:pr-20
lg:flex-row flex '>Hurry up! Sale ends in: <span className=' w-full '> <TimerCounter/> </span></button>
</div>
  )
}