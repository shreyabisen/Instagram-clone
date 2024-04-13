import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import dB, { auth } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';


function Login() {

    const [logEmail, setlogEmail] = useState('');
    const [logPwd, setlogPwd] = useState('');

    const [regEmail, setregEmail] = useState('');
    const [regPwd, setregPwd] = useState('');

    const [regHandleId, setregHandleId] = useState('');
    const [regUserName, setregUserName] = useState('');

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // navigate('/home')

        if (logEmail && logPwd) {
            signInWithEmailAndPassword(auth, logEmail, logPwd)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage)
                });
            // navigate('/home')
        }
        else {
            alert('Invalid Credentials')
        }

    }
    const handleRegistration = (e) => {
        e.preventDefault();
        if (regEmail && regPwd && regHandleId && regUserName) {
            createUserWithEmailAndPassword(auth, regEmail, regPwd)//account create bh krta h login bhi krata h usi time
                .then((userCredential) => {//jb user ka ccount create ho jayenga tb .then execute honga
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate('/home')
                    const docRef = doc(dB, "USERS", user.uid);
                    const userData = {
                        USER_NAme: regUserName,
                        USER_EMAIL_ID: regEmail,
                        USERS_PWD: regPwd,
                        USERS_HANDLE_ID: regHandleId,
                    }
                    setDoc(docRef, userData)
                        .then(() => {
                            navigate('/home')
                        })
                        .catch((error) => {
                            console.log(error.message)
                        })

                })
                .catch((error) => {//jb user ka account create nh hua to .catch execute hoga
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);

                });



        }
        else {
            alert('Invalid Credentials')

        }
    }
    return (
        <div className='flex flex-row w-screen justify-center '>
            {/* login */}

            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input
                                    value={logEmail} onChange={(e) => setlogEmail(e.target.value)}
                                    id="email"
                                    name="email" type="email"

                                    autocomplete="email"
                                    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input
                                    value={logPwd} onChange={(e) => setlogPwd(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"

                                    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleLogin} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
            {/* registration */}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div>
                    <label for="handleid" class="block text-sm font-medium leading-6 text-gray-900">Handle Id</label>
                    <div class="mt-2">
                        <input
                            value={regHandleId} onChange={(e) => setregHandleId(e.target.value)}
                            id="handleId"
                            name="handleId" type="text"


                            required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    <div class="mt-2">
                        <input
                            value={regUserName} onChange={(e) => setregUserName(e.target.value)}
                            id="username"
                            name="username" type="text"


                            required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input
                                    value={regEmail} onChange={(e) => setregEmail(e.target.value)}
                                    id="email"
                                    name="email" type="email"

                                    autocomplete="email"
                                    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input
                                    value={regPwd} onChange={(e) => setregPwd(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"

                                    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleRegistration} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login