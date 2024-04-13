import React, { useEffect, useState } from 'react'
import OnePost from './OnePost'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import dB, { auth } from '../firebase'

const AllPosts = () => {

    const [allPosts, setallPosts] = useState([])
    const userId = auth?.currentUser?.uid
    useEffect(() => {
        const subscribe = onSnapshot(
            collection(dB, "USERS", userId, "POSTS"),
            (querySnapshot) => {
                setallPosts(querySnapshot.docs.map((doc) => ({
                    postId: doc.id,
                    postData: doc.data()
                })))

            })




        return () => subscribe()


    }, [userId])

    const [userInfo, setuserInfo] = useState(null)
    useEffect(() => {
        if (userId) {
            const docRef = doc(dB, "USERS", userId)
            onSnapshot(docRef, (doc) => {
                setuserInfo(doc.data())
                // console.log("Current data: ", doc.data())
            })
        }
    }, [userId])


    // const AllPosts = [
    //     {
    //         userId: 1,
    //         userName: "Shreya",
    //         userhandle: "Shreya_Bisen",
    //         userAvtar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTZhpmqU2oc98NyM1CRjeTOsO3h-ljGp5bg&usqp=CAU",

    //         postImage: "https://media.istockphoto.com/id/1317323759/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=is&k=20&c=qbO_MtHjEMGVjxPuhUvq-e8j-WIuxTkPQ7HdsWA1KSE=",
    //         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?",
    //         likes: 17,
    //         Comments: 129
    //     },
    //     {

    //         userId: 2,
    //         userName: "Diksha_patle",
    //         userhandle: "dishu_p",
    //         userAvtar: "https://images.unsplash.com/photo-1704740533983-d3f6a9d190bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    //         postImage: "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?",
    //         likes: 70,
    //         Comments: 170

    //     },
    //     {
    //         userId: 7,
    //         userName: "Shreya_patle",
    //         userhandle: "dishu_p",
    //         userAvtar: "https://images.unsplash.com/photo-1704511618479-b7d95feab8d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",

    //         postImage: "https://images.unsplash.com/photo-1704841632563-b40ffa74ae09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    //         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?",
    //         likes: 80,
    //         Comments: 567,
    //     },
    //     {
    //         userId: 5,
    //         userName: "payal_patle",
    //         userhandle: "piyu_p",
    //         userAvtar: "https://images.unsplash.com/photo-1704741253008-7b0a5ed52c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D",
    //         postImage: "https://images.unsplash.com/photo-1618886487325-f665032b6352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    //         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?",
    //         likes: 10,
    //         Comments: 123
    //     },
    // ]


    return (
        <div className='flex flex-col items-center'>
            {
                allPosts.map((post, index) => (
                    <OnePost
                        key={index}
                        userId={userId}
                        userName={userInfo.USER_NAME}
                        userhandle={userInfo.USER_HANDLE}
                        userAvtar={userInfo.USER_AVTAR}


                        postImage={post.postData.POST_IMAGE}
                        postText={post.postData.POST_TEXT}
                        postTimestamp={post.postData.POST_TIMESTAMP}
                        likes={178}
                        Comments={8765}
                    />
                ))
            }

        </div>
    )
}


export default AllPosts