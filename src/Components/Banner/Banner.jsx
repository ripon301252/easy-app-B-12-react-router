import React from 'react';
import ImgApp from '../../assets/app.png'
import ImgPlayStore from '../../assets/playStore.png'
import ImgBanner from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <h1 className='md:text-5xl text-4xl text-center font-bold md:mt-14 mt-5'>We Build <br /> <span className='text-[#8755ea]'>Productive </span> Apps</h1>
            <p className='text-center text-gray-400 md:text-sm text-xs md:my-6 my-3 md:mx-0 mx-2'>At EASY.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center md:flex-row flex-col md:gap-10 gap-4 md:mb-10 mb-5 md:mx-0 mx-20'>
                <a href='https://play.google.com/store/' target='_blank' className='flex gap-2 bg-white border-1 border-gray-300 rounded py-2 px-3 text-black font-bold cursor-pointer'> <img className='w-6' src={ImgPlayStore} alt={ImgPlayStore} /> Google Play</a>
                <a href='https://www.apple.com/app-store/' target='_blank' className='flex gap-2 bg-white border-1 border-gray-300 rounded py-2 px-3 text-black font-bold cursor-pointer'> <img className='w-6' src={ImgApp} alt={ImgApp} /> App Store</a>
            </div>
            <div>
                <img className='mx-auto md:w-[700px] w-[500px] md:px-0 px-2' src={ImgBanner} alt={ImgBanner} />
            </div>
            <div className='bg-gradient-to-r from-[#5633e4] to-[#8755ea] md:py-12 py-6'>
                <h1 className='text-center md:text-5xl text-3xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-evenly md:flex-row flex-col items-center md:mt-10 mt-5'>
                    <div className='text-center'>
                        <p className='text-sm text-gray-400 '>Total Downloads</p>
                        <h1 className='text-5xl font-bold md:my-2 text-white'>29.6 M</h1>
                        <p className='text-sm text-gray-400 '>21% more than last month</p>
                    </div>
                    <div className='text-center md:my-0 my-7'>
                        <p className='text-sm text-gray-400 '>Total Reviews</p>
                        <h1 className='text-5xl font-bold md:my-2 text-white'>906K</h1>
                        <p className='text-sm text-gray-400 '>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm text-gray-400 '>Active Apps</p>
                        <h1 className='text-5xl font-bold md:my-2 text-white'>132+</h1>
                        <p className='text-sm text-gray-400 '>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;