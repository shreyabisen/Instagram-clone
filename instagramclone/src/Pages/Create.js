import React, { useState } from 'react'
import LeftSideBar from '../Comonents/LeftSideBar'
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import dB, { auth, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Create() {
    const currentUserId = auth?.currentUser?.uid

    const [progress, setprogress] = useState(0)

    const [postText, setPostText] = useState("")
    const [image, setimage] = useState(null)

    const handleCreateImage = (e) => {
        if (e.target.files[0]) {
            setimage(e.target.files[0])
        }
    }

    const handleCreatePost = (e) => {
        e.preventDefault();
        if (postText || image) {
            if (image) {
                const storageRef = ref(storage, `${currentUserId}/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        //unpload progress ko monitor krneka
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setprogress(progress)
                    },
                    (err) => {
                        //on error
                        console.log(err.message);
                    },
                    () => {
                        //on success
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((downloadURL) => {
                                addDoc(collection(dB, "USERS", currentUserId, "POSTS"), {
                                    POST_TEXT: postText,
                                    POST_IMAGE: downloadURL,
                                    POST_TIMESTAMP: serverTimestamp(),
                                }).then(() => {
                                    setPostText("")
                                    setimage(null)
                                    setprogress(0)
                                }).catch((err) => {
                                    console.log(err.message);
                                })
                            }).catch((err) => {
                                console.log(err.message);
                            })
                    }
                )
            } else {
                addDoc(collection(dB, "USERS", currentUserId, "POSTS"), {
                    POST_TEXT: postText,
                    POST_IMAGE: "",
                    POST_TIMESTAMP: serverTimestamp(),
                }).then(() => {
                    setPostText("")
                }).catch((err) => {
                    console.log(err.message);
                })
            }
        }
    }
    return (
        <div>
            <LeftSideBar />
            <div className='ml-[250px] flex flex-col items-center w-[500px]
            border-4 border-black'>
                <h1 className='m-2'>Create Post</h1>
                <textarea
                    value={postText}
                    onChange={(e) => {
                        e.preventDefault();
                        setPostText(e.target.value)
                    }}
                    cols='100'
                    rows='4'
                    placeholder='What do you want to share?'
                    className='border-2 border-black w-[450px] m-2'
                >

                </textarea>
                <progress className='m-2' value={progress} max="100"></progress>
                <input onChange={handleCreateImage}
                    type='file'
                    className='m-2'
                    accept='image/png,image/gif,image/jpeg,'//only image ko select krta h

                />
                <button onClick={handleCreatePost} className='m-2 px-10 py-2 text-white
                bg-blue-600 text-xl rounded-xl hover:bg-blue-900
                transition delay-100'>Post</button>

            </div>
        </div>
    )
}

export default Create