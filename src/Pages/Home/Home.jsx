import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useApps } from '../../Hooks/useApps';

const Home = () => {

    const { apps, loading, error } = useApps()

    const [loadingDelay, setLoadingDelay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingDelay(false);
        }, 300); // 1.5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    // Error
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="text-3xl font-bold mb-3">Something went wrong!</h1>
                <p className="text-gray-500 mb-5">{error.message || 'Failed to fetch app data.'}</p>
                <a href="/apps" className="btn btn-primary">Back to Apps</a>
            </div>
        );
    }

    // loading
    if (loading || loadingDelay) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div>
            <Banner></Banner>
            <TrendingApps apps={apps}></TrendingApps>
        </div>
    );
};

export default Home;