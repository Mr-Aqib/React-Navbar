import React from 'react'
const Navbar = () => {
    return (
        <>
            <div className="nav-left col-lg-2  col-7 d-flex flex-column shadow align-items-center ">
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <i class="bi bi-twitter"></i>
                    </div>
                    <ul className='m-0 ul-items p-0 d-flex flex-column gap-4'>
                        <li className=' li-items d-flex flex-row gap-4'>
                            <i class="bi bi-house-door-fill"></i>
                            <p className='m-0 p-0'>Home</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-hash"></i>
                            <p className='m-0 p-0'>Explore</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-bell-fill"></i>
                            <p className='m-0 p-0'>Notifications</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-envelope"></i>
                            <p className='m-0 p-0'>Messages</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-bookmark"></i>
                            <p className='m-0 p-0'>Bookmarks</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-card-checklist"></i>
                            <p className='m-0 p-0'>List</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-person"></i>
                            <p className='m-0 p-0'>Profile</p>
                        </li>
                        <li className='d-flex flex-row gap-4'>
                            <i class="bi bi-three-dots"></i>
                            <p className='m-0 p-0'>More</p>
                        </li>
                    </ul>
                    <button className='border-0 tweetbtn rounded-5 py-2 '> Tweet</button>
                </div>
            </div>
        </>
    )
}

export default Navbar