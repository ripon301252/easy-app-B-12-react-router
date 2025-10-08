import React, {  useState } from 'react';
import { useApps } from '../../Hooks/useApps';
import AppAllCard from '../AppAllCard/AppAllCard';

const Apps = () => {
    const { apps, loading, error } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.companyName.toLocaleLowerCase().includes(term)) : apps
    // console.log(searchedApps)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className='bg-base-200'>
            <h1 className='text-center md:text-4xl text-2xl font-semibold md:pt-10 pt-5 pb-5'>Our All Applications</h1>
            <p className='text-center text-sm text-gray-400 md:mb-0 mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='px-10 flex md:flex-row flex-col justify-between items-center'>
                <div className='flex items-center gap-1 border-b-2'>
                    <p className='text-xl font-semibold'>({searchedApps.length})</p>
                    <h3 className='text-xl font-semibold'>Apps Found</h3>
                </div>
                <label className='input mt-5 mb-3'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Product" />
                </label>
            </div>
            {searchedApps.length === 0 ? (
                <p className='flex flex-col items-center justify-center text-5xl font-bold py-32'>No Apps Found</p>
            ) : (

                <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 px-10'>
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