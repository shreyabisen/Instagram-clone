import React from 'react'
import Statuses from './Statuses'
import AllPosts from './AllPosts'

function NewsFeed() {
    return (
        <div className='w-[700px]ml-[250px]'>

            {/* ststus */}
            <Statuses />


            {/* all_products */}

            <AllPosts />

        </div>
    )
}

export default NewsFeed