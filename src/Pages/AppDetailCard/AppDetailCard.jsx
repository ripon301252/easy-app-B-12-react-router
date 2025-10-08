import React from 'react';

import { useParams } from 'react-router';
import { useApps } from '../../Hooks/useApps';

const AppDetailCard = ({app}) => {
    const { apps, loading, error } = useApps()
    const { id } = useParams()

    const appsData = apps.find(a => (a.id) === Number(id))
    console.log(appsData)

    if (loading) return <p>Loading....</p>

     const { image, description, ratingAvg, downloads } = app

    return (
        <div>
            <h1> app details card</h1>
            <div className="card bg-base-100 shadow-sm hover:scale-102 transition ease-in-out">
                <figure className="px-5 pt-5">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-68 h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xs">{description}</h2>

                    <div className="flex justify-between w-full items-center mt-1">
                        <div className="flex items-center text-sm text-[#03b47c] bg-gray-300 gap-1 px-3 rounded-xl"><FiDownload /> {downloads}M</div>
                        <div className="flex items-center text-sm text-blue-700 bg-gray-300 gap-1 px-3 rounded-xl"><IoMdStar /> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailCard;