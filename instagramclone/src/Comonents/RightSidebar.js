import React, { useEffect, useState } from 'react'
import dB, { auth } from '../firebase'
import { CollectionReference, collection, doc, onSnapshot } from 'firebase/firestore'
import FriendSuggestions from './FriendSuggestions'

function RightSidebar() {
    const userId = auth.currentUser.uid

    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        if (userId) {
            const docRef = doc(dB, "USERS", userId)
            onSnapshot(docRef, (doc) => {
                setUserInfo(doc.data())
                // console.log("Current data: ", doc.data())
            })
        }
    }, [userId])

    const [freindlist, setfriendslist] = useState([])

    useEffect(() => {
        const collRef = collection(dB, "USERS")
        const unsubscribe = onSnapshot(collRef, (querySnapshot) => {

            // const cities = [];

            querySnapshot.forEach((doc) => {
                // cities.push(doc.data().name);
                let abc = {
                    Image: doc.data()?.USER_AVTAR,
                    name: doc.data()?.USER_NAme,
                    handleId: doc.data()?.USERS_HANDLE_ID,
                    userId: doc.id
                }
                freindlist.push(abc)
            });
            // console.log("Current cities in CA: ", cities.join(", "));
        });
        return () => unsubscribe();

    }, [])




    return (
        <div className=' w-[350px] p-2 mt-5'>

            {/* profile */}
            <div className='flex flex-row items-center justify-between '>

                <div className='flex flex-row items-center '>
                    <img src="https://envato-shoebox-0.imgix.net/d0d9/0382-fb20-49d4-9a1b-97f6b74688b3/4H1A4080.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e53df7d324ae21140ca30da578002cc3"
                        alt=""
                        className='w[35px] h-[35px] rounded-full'

                    />
                    <div className='ml-3'>
                        <p className='text-sm text-black'>{userInfo?.USERS_HANDLE_ID}</p>
                        <p className='text-sm text-gray-500'>{userInfo?.USER_NAme}</p>
                    </div>
                </div>
                <p className='text-sm text-blue-500'>Switch</p>
            </div>

            {/* suggestions */}
            <div className='flex flex-row items-center justify-between mt-3'>
                <p className='text-md text-black-400'>Suggestions For You</p>
                <p className='text-sm text-gray-500'>See All</p>
            </div>


            {/* friendslist */}
            <div className='mt-2'>

                {
                    freindlist.map((freindlist, index) => (
                        <FriendSuggestions
                            key={index}
                            frndimage={freindlist?.Image}
                            frndName={freindlist?.name}
                            frndHandle={freindlist?.handleId}
                        />


                    ))

                }
                <div className='mt-5'>
                    <p className='text-xs text-gray-400 mt-0'>
                        <span>About</span>&middot;&nbsp;
                        <span>Help</span>&middot;&nbsp;
                        <span>Press</span>&middot;&nbsp;
                        <span>API</span>&middot;&nbsp;
                        <span>Job</span>&middot;&nbsp;
                        <span>Privacy</span>&middot;&nbsp;
                        <span>Term</span>

                    </p>
                </div>
                <p className='text-xs text-gray-400 mt-5'>
                    <span>Locations</span>&middot;&nbsp;
                    <span>Top Accounts</span>&middot;&nbsp;
                    <span>Hashtags</span>&middot;&nbsp;
                    <span>Language</span>
                </p>
                <p className='text-xs text-black-400 mt-5'>
                    <span>© 2024 Instagram</span>
                </p>
            </div>

        </div>






    )
}

export default RightSidebar