import React from 'react'
import LeftSideBar from '../Comonents/LeftSideBar'
import { useParams } from 'react-router-dom'

function FriedsProfile() {

    //recieving friendid as aparameter from url
    const { friensdId } = useParams();

    return (
        <div>
            <LeftSideBar />
            <div className='ml-[250px]'>
                <h2>FriedsProfile={friensdId}</h2>
            </div>
        </div>
    )
}

export default FriedsProfile