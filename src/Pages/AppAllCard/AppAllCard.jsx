import React from 'react';
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AppAllCard = ({ app }) => {

    const { image, title, ratingAvg, downloads, id } = app

    const handleAlert = () => {
        toast(
            <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
                App is Added Details Page!
            </span>
        );
    }

    return (
        <Link onClick={handleAlert} to={`/appDetails/${id}`} className=''>
            <div className="card bg-base-100 shadow-sm hover:scale-102 transition ease-in-out">
                
                <figure className="px-3 pt-3">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-72 h-52" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xs">{title}</h2>

                    <div className="flex justify-between w-full items-center mt-1">
                        <div className="flex items-center text-sm text-[#03b47c] bg-gray-300 gap-1 px-3 rounded-xl"><FiDownload /> {downloads}M</div>
                        <div className="flex items-center text-sm text-blue-700 bg-gray-300 gap-1 px-3 rounded-xl"><IoMdStar /> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppAllCard;