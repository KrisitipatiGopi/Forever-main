import React from 'react'
import { assets } from '../Utils/assets/frontend_assets/assets';
import LatestCollection from './LatestCollection';
import BestSeller from './BestSeller';


const Home = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row h-[17%] justify-center items-center w-full border border-black mt-2'>
        <div className='flex flex-col items-center justify-center w-full md:w-6/12 gap-3'>
          <h3><b>───</b>&nbsp;&nbsp;Our Bestsellers</h3>
          <h1 className='text-3xl md:text-5xl'>Latest Arrivals</h1>
          <h3><b>Shop Now───&nbsp;&nbsp;</b></h3>
        </div>
        <div className="w-full md:w-6/12">
            <img src={assets.hero_img} alt='hero'/>
        </div>
      </div>
      <div className='mt-10'>
          <LatestCollection />
      </div>
      <div className='mt-10'>
          <BestSeller />
      </div>
      <div className='mt-28 flex items-center'>
        <div className='flex justify-center items-center w-full gap-32'>
          <div className='flex flex-col items-center justify-center'>
            <img src={assets.exchange_icon} alt='exchange' className='w-14 mb-6' />
            <h1 className='font-semibold'>Easy Exhange Policy</h1>
            <p>We Offer Hassle Free Exchange Policy</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src={assets.quality_icon} alt='exchange' className='w-14 mb-6' />
            <h1 className='font-semibold'>7 Days Return Policy</h1>
            <p>We Provide 7 days free return policy</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src={assets.support_img} alt='exchange' className='w-11 mb-6' />
            <h1 className='font-semibold'>Best Customer Support</h1>
            <p>We provide 24/7 customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
