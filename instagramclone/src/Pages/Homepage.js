import React from 'react'
import LeftSideBar from '../Comonents/LeftSideBar'
import NewsFeed from '../Comonents/NewsFeed'
import RightSidebar from '../Comonents/RightSidebar'

function Homepage() {

    return (

        <div className='flex flex-row w-screen justify-center h-screen'>
            {/* left sidebar */}
            <LeftSideBar />

            {/* News Feed */}
            <NewsFeed />

            {/* Right sidebar */}
            <RightSidebar />

        </div>
    )
}

export default Homepage