import React, { useEffect, useState } from 'react';
import { useApps } from '../../Hooks/useApps';
import AppCard from '../../Pages/AppCard/AppCard';
import { NavLink } from 'react-router';

const TrendingApps = () => {

    const { apps, loading, error } = useApps()
    const [loadingDelay, setLoadingDelay] = useState(true)
    // console.log(apps)

    useEffect(() => {
        const timer = setTimeout(() => setLoadingDelay(false), 1500)
        return () => clearTimeout(timer)

    }, [])
    
    const isLoading = loading || loadingDelay

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    const featuredApps = apps.slice(0, 8)

    return (
        <div className='bg-base-200'>
            <h1 className='md:text-5xl text-3xl font-bold text-center md:pt-10 pt-5'>Trending Apps</h1>
            <p className='text-sm text-center text-gray-400 md:my-7 my-4 md:mx-0 mx-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 md:px-10'>
                {
                    featuredApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>

            <div className='text-center my-6'>
                <NavLink className='btn bg-gradient-to-r from-[#5633e4] to-[#8755ea] text-white' to={`/apps`}>Show All</NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;