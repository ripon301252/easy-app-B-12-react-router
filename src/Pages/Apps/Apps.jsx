import React, {  useEffect, useState } from 'react';
import { useApps } from '../../Hooks/useApps';
import AppAllCard from '../AppAllCard/AppAllCard';
import { IoSearch } from "react-icons/io5";

const Apps = () => {
    const { apps, loading, error } = useApps()

    const [loadingDelay, setLoadingDelay] = useState(true)
    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState(false)

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.companyName.toLocaleLowerCase().includes(term)) : apps
    // console.log(searchedApps)

    // Initial page load delay
    useEffect(()=> {
        const timer = setTimeout(()=>setLoadingDelay(false), 1000)
        return()=> clearTimeout(timer)

    },[])

    // Search loading effect
    useEffect(() =>{
        if(!term){
            setSearchLoading(false)
            return;
        }

        setSearchLoading(true)
        const timer = setTimeout(() => setSearchLoading(false), 500)
        return () => clearTimeout(timer);
    },[term])


    const isLoading = loading || loadingDelay
    const isSearchLoading = searchLoading

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className='bg-base-200'>
            <h1 className='text-center md:text-4xl text-2xl font-semibold md:pt-10 pt-5 pb-5'>Our All Applications</h1>
            <p className='text-center text-sm text-gray-400 md:mb-0 mb-4 mx-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='px-10 flex md:flex-row flex-col justify-between items-center'>
                <div className='flex items-center gap-1 '>
                    <p className='text-xl font-semibold'>({searchedApps.length})</p>
                    <h3 className='text-xl font-semibold'>Apps Found</h3>
                </div>
                <label className='input mt-5 mb-3'>
                    <IoSearch className='text-gray-400 text-xl' />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search"   placeholder=" Search Product" className='-ml-2' />
                </label>
            </div>
            { isSearchLoading ? (
                <div className="flex justify-center items-center h-40">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) :
            searchedApps.length === 0 ? (
                <p className='flex flex-col items-center justify-center text-5xl font-bold py-32'>No Apps Found</p>
            ) : (

                <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 md:px-10'>
                    {
                        searchedApps.map(app => <AppAllCard key={app.id} app={app}></AppAllCard>)
                    }
                </div>
            )
            }

        </div>
    );
};

export default Apps;