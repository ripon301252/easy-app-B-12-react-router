import React, { useEffect, useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";


const Installation = () => {

    const [install, setInstall] = useState([])

    useEffect(() => {
        const savedInstall = JSON.parse(localStorage.getItem('installation'))
        if (savedInstall) setInstall(savedInstall)
    }, [])

    return (
        <div>
            this is installation
            <div>
                {install.map(a => <div key={a.id} className='flex md:flex-row flex-col justify-between items-center bg-white border-1 border-gray-300 rounded-lg md:mx-10 py-1 md:px-2 mt-3'>

                    <div className='flex md:flex-row flex-col items-center md:gap-10 gap-3'>
                        <div>
                            <img src={a.image} alt={a.image} className='md:w-20 md:h-16 rounded-md' />
                        </div>
                        <div>
                            <p className='text-gray-400 md:text-left text-center'>{a.description}</p>
                            <div className="flex w-full items-center md:text-left text-center md:gap-10 gap-6 mt-3 mb-3">
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

                    <button className='btn bg-[#00d390] text-white'>Uninstall</button>
                </div>)

                }
            </div>
        </div>
    );
};

export default Installation;