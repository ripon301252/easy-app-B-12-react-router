import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { useApps } from '../../Hooks/useApps';
import { BiLike } from "react-icons/bi";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import appNotImg from '../../assets/App-Error.png'
import { toast } from 'react-toastify';


const AppsDetails = () => {
    const { id } = useParams()

    const { apps, loading, error } = useApps()

    const [install, setInstall] = useState(false)

    // for disable mood
     useEffect(() => {
        const existingInstall = JSON.parse(localStorage.getItem('installation')) || [];
        const alreadyInstalled = existingInstall.some(a => a.id === Number(id));
        if (alreadyInstalled) {
            setInstall(true);
        }
    }, [id]);

    const appsData = apps.find(a => (a.id) === Number(id))
    // console.log(appsData)

    if (!appsData) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh]">
                <img src={appNotImg} alt={appNotImg} className='w-[200px]' />
                <h1 className="text-3xl font-bold mb-3">App is Not Found</h1>
                <p className="text-gray-500 mb-5">
                    The app with ID {id} does not exist.
                </p>
                <a href="/apps" className="btn btn-primary">Back to App</a>
            </div>
        );
    }

    
    const { image, description, title, ratingAvg, downloads, reviews, companyName, size, ratings } = appsData || {}

    // localStorage
    const handleAddInstall = () => {
        const existingInstall = JSON.parse(localStorage.getItem('installation')) || []
        let updateInstall = []
        if (existingInstall) {
            const isDuplicate = existingInstall.some(a => a.id === appsData.id)

            if (isDuplicate) return toast('sorry vai')
            updateInstall = [...existingInstall, appsData]
        }
        else {
            updateInstall.push(appsData)
        }
        localStorage.setItem('installation', JSON.stringify(updateInstall))

        toast('App install successfully')
    }

   


    if (loading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    // generate chart data
    const sortedRatings = ratings
        ? [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name))
        : [];



        

    return (
        <div className='container mx-auto'>
            <div className='mt-10 '>
                <div className=" flex md:flex-row flex-col bg-base-200 rounded-2xl md:gap-10 gap-5 shadow-sm p-5">
                    <figure className="">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl w-68 h-52" />
                    </figure>
                    <div className=" items-center">
                        <h2 className=" md:text-2xl font-semibold">{title}</h2>
                        <p className='font-semibold text-sm mt-2 mb-3'><span className='text-gray-400'>Developed by :</span> <span className='text-[#723be7]'>{companyName}</span></p>
                        <hr className='text-gray-300' />

                        <div className="flex w-full items-center md:gap-10 gap-6 mt-3 mb-3">
                            <div className=" flex flex-col items-center   ">
                                <p className='text-2xl text-[#03b47c]'><FiDownload /></p>
                                <p className='text-xs text-gray-400'>Downloads</p>
                                <p className='text-2xl text-[#001931] font-bold'>{downloads}M</p>
                            </div>
                            <div className=" flex flex-col items-center text-sm text-blue-700 ">
                                <p className='text-2xl text-[#ff8811]'><IoMdStar /></p>
                                <p className='text-xs text-gray-400'>Average Ratings</p>
                                <p className='text-2xl text-[#001931] font-bold'>{ratingAvg}</p>
                            </div>
                            <div className=" flex flex-col items-center text-sm text-blue-700 ">
                                <p className='text-2xl text-[#733ce7]'><BiLike /></p>
                                <p className='text-xs text-gray-400'>Total Reviews</p>
                                <p className='text-2xl text-[#001931] font-bold'>{reviews}K</p>
                            </div>
                        </div>
                        <div className='md:text-left text-center'>
                            <button
                                className='btn bg-[#00d390] text-white'
                                onClick={() => { setInstall(true); handleAddInstall() }}  >
                                {install
                                    ? `Installed`
                                    : `Install Now (${size} MB)`
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-10 container mx-auto text-gray-300' />

            <div className=''>
                <h1 className='ml-4 font-bold'>Ratings</h1>
                <BarChart width={1300} height={250} data={sortedRatings}        // sorted array
                    layout="vertical"           // horizontal bars
                    margin={{ top: 20, right: 30, left: 0, bottom: 20 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />                 {/* বারের দৈর্ঘ্য */}
                    <YAxis type="category" dataKey="name" /> {/* 5 star উপরে, 1 star নিচে */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#ff8811" />
                </BarChart>
            </div>
            <hr className='my-10 container mx-auto text-gray-300' />
            <div>
                <h1 className='font-bold'>Description</h1>
                {description}
            </div>
        </div>



    );
};

export default AppsDetails;