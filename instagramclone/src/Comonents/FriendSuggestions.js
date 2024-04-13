import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function FriendSuggestions(prop) {
    const { frndimage, frndName, frndHandle } = prop
    return (
        <div className='flex flex-row items-center justify-between mt-3'>
            <div className='flex flex-row items-center'>
                {
                    frndimage ? (
                        <img src={frndimage}
                            alt={frndName}
                            className='w-[35px] h-[35px] rounded-full'

                        />
                    ) : (
                        <FaRegUserCircle className='w-[35px] h-[35px] rounded-full' />
                    )


                }

                <div className='ml-3'>
                    <p className='text-sm text-black'>{frndHandle}</p>
                    <p className='text-sm text-gray-500'>{frndName}</p>
                </div>
            </div>
            <p className='text-sm text-blue-500'>Follow</p>
        </div>
    )
}

export default FriendSuggestions