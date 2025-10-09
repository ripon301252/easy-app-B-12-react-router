import React, { useEffect, useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { toast } from 'react-toastify';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useApps } from '../../Hooks/useApps';

const Installation = () => {

    const { loading, error } = useApps()
    const [loadingDelay, setLoadingDelay] = useState(true);

    const [sortOrder, setSortOrder] = useState('none')

    const [install, setInstall] = useState([])

    useEffect(() => {
        const savedInstall = JSON.parse(localStorage.getItem('installation'))
        if (savedInstall) setInstall(savedInstall)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingDelay(false);
        }, 100);

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

    // Sort
    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...install].sort((a, b) => a.size - b.size)
        }
        else if (sortOrder === 'size-dsc') {
            return [...install].sort((a, b) => b.size - a.size)
        }
        else {
            return install
        }
    })()

    // remove ui & local
    const handleRemove = (id) => {
        const existingInstall = JSON.parse(localStorage.getItem('installation'))
        let updatedInstall = existingInstall.filter(a => a.id !== id)
        setInstall(updatedInstall)

        localStorage.setItem('installation', JSON.stringify(updatedInstall))

        toast(
            <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
                App Uninstalled successfully!
            </span>
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
        <div className='md:mx-10 '>
            <h1 className='text-center md:text-4xl text-2xl font-semibold md:pt-10 pt-5'>Your Installed Apps</h1>
            <p className='text-center text-sm text-gray-400 my-5 mx-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center md:mx-0 mx-3'>
                <h2 className='md:text-xl font-bold'>{sortedItem.length} Apps Found</h2>
                <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className='btn select md:w-32 w-28 md:text-base text-xs'>
                    <option value={"none"}>Sort By Size</option>
                    <option value={'size-asc'}>Low-&gt;High</option>
                    <option value={'size-dsc'}>High-&gt;Low</option>
                </select>
            </div>
            <div>
                {sortedItem.map(a => <div key={a.id} className='flex md:flex-row flex-col justify-between items-center bg-white border-1 border-gray-300 rounded-lg md:py-1 py-5 md:px-2 mt-3'>

                    <div className='flex md:flex-row flex-col items-center md:gap-10  gap-3'>
                        <div>
                            <img src={a.image} alt={a.image} className='md:w-20 w-72 md:h-16 h-52 rounded-md' />
                        </div>
                        <div>
                            <p className='text-gray-400 md:text-left text-center'>{a.title}</p>
                            <div className="flex w-full md:justify-start justify-center items-center md:text-left md:gap-10 gap-6 mt-3 mb-3">
                                <div className=" flex items-center text-sm gap-1 text-[#03b47c]">
                                    <p><FiDownload /></p>
                                    <p>{a.downloads}M</p>
                                </div>
                                <div className=" flex items-center text-sm text-[#ff8811] ">
                                    <p className='text-md' ><IoMdStar /></p>
                                    <p>{a.ratingAvg}</p>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-400'>{a.size} MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => handleRemove(a.id)} className='btn bg-[#00d390] text-white'>Uninstall</button>
                </div>)

                }
            </div>
        </div>
    );
};

export default Installation;