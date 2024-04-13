import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function OnePost(props) {

    const { userId, userName,
        userhandle,
        userAvtar,
        postTimestamp,

        postImage,
        postText,
        likes,
        Comments } = props

    return (

        <div className='w-[500px] mb-3'>
            {/* useravatar && userName && timestamp && three dots */}
            <div className='flex flex-row items center justify-between'>
                <div className='flex flex-row items center'>
                    {/* this is how we send parametr to another page using link */}
                    <Link to={`/friends / ${userId}`}>
                        <img
                            src={userAvtar}
                            alt={userName} s
                            className='w-10 h-10 rounded-full' />
                    </Link>
                    <Link to={`/friends / ${userId}`}>
                        <p className='text-md ml-2 text-black hover:underline'>{userhandle}</p>
                    </Link>

                    <p className='text-md ml-2 text-black-500 mx-2'>&middot;</p>
                    <p className='text-md ml-2 text-black'>{postTimestamp.toDate().toDateString()}</p>


                </div>

                <BsThreeDots />

            </div>



            {/* image || images */}
            {
                postImage && (
                    <img

                        src={postImage}
                        alt={userName}
                        className='my-3'
                    />

                )
            }



            {/* like && comment && share && bookmark &&no.of likes */}
            <div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <IoHeart className='text-2xl mr-5' />
                        <FaComment className='text-2xl mr-5' />
                        <IoIosSend className='text-2xl' />


                    </div>
                    <IoBookmarkSharp />
                </div>
                <p className='text-md ml-2 mt-2'>{likes} likes</p>
            </div>



            {
                postText && (
                    <>
                        {/* username && their comments */}
                        <div className='mt-2'>

                            <p className='text-sm'><span className='mr-2'>{userhandle}</span>
                                {postText}

                            </p>
                        </div>
                        {/* more buttons  */}
                        <p className='text-sm text-gray-500 '>...more</p>
                    </>
                )
            }

            {/* all comments link */}
            <p className='text-sm text-gray-500 mt-2'></p>


            {/* add comment textbox */}
            <input
                type="text"
                placeholder="Add a comment..."
                className='w-full border-b p-2 mt-2 h-10 outline-none' />
        </div >
    )
}

export default OnePost