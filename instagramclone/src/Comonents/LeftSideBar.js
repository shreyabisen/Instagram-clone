import React from 'react'

import { IoMdMenu } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { NAV_ITEMS } from '../Constatnts/AllConstants';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function LeftSideBar() {
    const navigate = useNavigate();

    const handleLogout = (e) => { //user id logout ktrne ke liye use krta h
        e.preventDefault();
        signOut(auth)
            .then(() => {
                navigate('/login');


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            })
        // navigate('/login');



    }


    return (

        <div className='w-[250px] h-screen pb-3 flex flex-col items-center justify-between border-r border-gray-300 fixed left-0 '>
            <div>
                <Link to={'/home'}>
                    {/* Logo */}

                    <img src="logo.png"
                        alt=""
                        className='w[100px] mt-10 mb-10'

                    />
                </Link>

                {/* options */}
                {
                    NAV_ITEMS.map((item, index) => (

                        <Link to={item.redirect}>
                            <div key={index} className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-4 hover:bg-gray-100 hover:cursor-pointer transition-delay-100' >
                                <item.icon className='text-2xl' />

                                <p className='ml-2 text-md'>{item.name}</p>
                            </div>
                        </Link>
                    ))
                }
                {/* <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <IoSearch />

                    <p className='ml-2 text-md'>Search</p>
                </div>
                <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <MdOutlineExplore />

                    <p className='ml-2 text-md'>Explore</p>
                </div>
                <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <  BiSolidMoviePlay />

                    <p className='ml-2 text-md'>Reel</p>
                </div>
                <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <RiMessengerLine />

                    <p className='ml-2 text-md'>Message</p>
                </div>
                <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    < FaRegHeart />

                    <p className='ml-2 text-md'>Notification</p>
                </div>
                <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <FaRegSquarePlus />

                    <p className='ml-2 text-md'>Create</p>
                </div> */}
                <Link to={'/profile'}>
                    <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>
                        <img src="https://envato-shoebox-0.imgix.net/d0d9/0382-fb20-49d4-9a1b-97f6b74688b3/4H1A4080.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e53df7d324ae21140ca30da578002cc3"
                            alt=""
                            className='w-[25px] h-[25px] rounded-full'

                        />
                        <p className='ml-3 text-md'>profile</p>
                    </div>
                </Link>


            </div>
            <div>
                <Link to={'/threads'}>
                    <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                        <FaThreads className='text-2xl' />

                        <p className='ml-3 text-md'>Threads</p>
                    </div>
                </Link>
                <div className='flex flex-row items-center w-[220px]p-2'>

                    <button onClick={handleLogout}>Logout</button>

                    {/* <p className='ml-2 text-md'>More</p> */}
                </div>
                {/* <div className='flex flex-row items-center w-[220px]p-2 rounded-lg mb-2 hover: bg-gray-100 hover:cursor-pointer transition-delay-100'>

                    <  IoMdMenu className='text-2xl' />

                    <p className='ml-2 text-md'>More</p>
                </div> */}
            </div>



            <div>


            </div>



        </div >
    )
}

export default LeftSideBar