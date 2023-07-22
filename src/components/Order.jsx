import React from 'react';
import memory from './images/icon-memory.svg'
import reduction from './images/icon-reaction.svg'
import verbal from './images/icon-verbal.svg'
import visual from './images/icon-visual.svg'


const Order = () => {
  return (
    <div className="flex  flex-col justify-center items-center mx-4 bg-White w- h-full rounded-3xl md:h-[300px] shadow-md md:flex-row md:w-[400px]">
        <aside className="h-full w-full flex justify-center px-4 py-6 bg-gradient-to-t from-Light_slate_blue to-Light_royal_blue rounded-3xl md:w-1/2 gap-4 text-center flex-col  items-center">
            <div className="text-Light_lavender text-xs">Your Results</div>
            <div className="flex justify-center items-center flex-col h-24 w-24 gap-2 rounded-full text-White bg-gradient-to-b from-Violet_blue to-Persian_blue ">
              <span className='text-4xl font-bold'>76</span> 
              <span className='text-xs text-Light_lavender'>of 100</span>
            </div>
            <div className="text-White text-lg">Great</div>
            <div className="text-center text-xs text-Light_lavender">You scrored higher than 65% of the people who taken these tests.</div>
        </aside>
        <div className="h-full w-full flex flex-col px-3 py-6 bg-White rounded-b-3xl md:w-1/2 md:rounded-b-none md:rounded-r-3xl">
          <h1 className="text-lg">Summary</h1>
          <ul className="flex flex-col gap-2 py-3">
            <li className="flex justify-between text-md bg-Lightred px-1 py-1 rounded-md">
              <div className="flex gap-1">
                <img src={reduction} alt="" srcset="" />
                <span className='text-sm text-Light_red'>Reaction</span>
              </div>
              <div className="text-sm">80 <span className='text-gray-400 text-sm'>/100</span></div>
            </li>
            <li className="flex justify-between text-sm bg-Orangeyyellow px-1 py-1 rounded-md">
              <div className="flex gap-1">
                <img src={memory} alt="" srcset="" />
                <span className='text-sm text-Orangey_yellow'>Memory</span>
              </div>
              <div className="">92 <span className='text-gray-400'>/100</span></div>
            </li>
            <li className="flex justify-between text-sm bg-Greenteal px-1 py-1 rounded-md">
              <div className="flex gap-1">
                <img src={verbal} alt="" srcset="" />
                <span className='text-sm text-Green_teal'>Verbal</span>
              </div>
              <div className="">61 <span className='text-gray-400'>/100</span></div>
            </li>
            <li className="flex justify-between text-sm bg-Cobaltblue px-1 py-1 rounded-md">
              <div className="flex gap-1">
                <img src={visual} alt="" srcset="" />
                <span className='text-sm text-Cobalt_blue'>Visual</span>
              </div>
              <div className="">72<span className='text-gray-400'>/100</span></div>
            </li>
            
          </ul>
          <button className=" pointer mt-3 rounded-full bg-Dark_gray_blue py-2 text-White text-sm hover:bg-gradient-to-t from-Light_slate_blue to-Light_royal_blue ">Continue</button>
        </div>
    </div>      
    
  )
}

export default Order
