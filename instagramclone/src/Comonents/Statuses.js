import React from 'react'

const Statuses = () => {
    const statusList = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTZhpmqU2oc98NyM1CRjeTOsO3h-ljGp5bg&usqp=CAU'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTZhpmqU2oc98NyM1CRjeTOsO3h-ljGp5bg&usqp=CAU'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/04/21/22/29/girl-1344646_1280.jpg'
        },
        {
            image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqebbVqMUSI1znTWjxz6smptx0paFBt1MVg&usqp=CAU'
        },
        {
            image: 'https://images.unsplash.com/photo-1507019403270-cca502add9f8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        },
        {
            image: 'https://media.licdn.com/dms/image/C4D03AQEAFzsBKGxmIw/profile-displayphoto-shrink_800_800/0/1638948467119?e=2147483647&v=beta&t=Z3DnWgfJe7fOfylVlrl7RltB97mdTzbsvLbmguFd8n4'
        },
        {
            image: 'https://1.bp.blogspot.com/-QjVRKzolLsg/YGlXSYWm_9I/AAAAAAAAjFo/JGsiU_XdR1cqnFogcaRoFHusExNko6UEgCLcBGAsYHQ/s16000-rw/New%2BHijabi%2BGirls%2BDP%2Bfor%2B%2Bsocial%2BMedia%2BProfile%2B%20%2B%25284%2529.jpg'
        },


    ]




    return (
        <div className='flex flex-row items-center justify-center p-3'>
            {
                statusList.map((status, index) => (


                    <img
                        key={index}
                        src={status.image}
                        alt={status.images}
                        className='w-16 h-16 rounded-full  outline outline-4 outline-offset-2 outline-red-500 m-2'
                    />


                ))

            }
        </div>
    )
}

export default Statuses