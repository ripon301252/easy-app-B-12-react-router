import React from 'react';
import ImgError from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center pt-5'>
                <img src={ImgError} alt={ImgError} className='md:w-[320px]' />
                <h1 className='text-4xl font-bold'>Oops, Apps Not Found</h1>
            </div>
            <p className='text-center text-sm text-gray-400 my-3'>The page you are looking for is not available.</p>
            <div className='text-center '>
                <Link to={`/`} className='btn bg-gradient-to-r from-[#5633e4] to-[#8755ea] text-white'>Go Back!</Link>
            </div>
        </div>
    );
};

export default Error;