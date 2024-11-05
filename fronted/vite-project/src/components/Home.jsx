/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar"
import Fillterbar from "./Fillterbar";
import { Link } from "react-router-dom"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = ({ sideNavbar }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/allVideo').then(res => {
            // console.log(res.data.videos)
            setData(res.data.videos);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="flex mt-16 ">
            <Sidebar sideNavbar={sideNavbar} />
            <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden scrollbar-thin ">
                {}
                <Fillterbar  />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-4  gap-4 p-5 -z-30">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col '>
                                    <Link to={`/watch/${item._id}`}>
                                        <div className=' relative h-48 md:h-58 md:rounded-xl  hover:rounded-none duration-200 overflow-hidden -z-30'>

                                            {/* thumnail image tag */}
                                            <img src={item?.thumbnail} alt="thumbnail" className='h-full w-full  ' />
                                            {/* time div */}
                                            <div className=''>
                                                <span className=' absolute bottom-2 right-2 bg-black text-white text-xs '>4:34</span>
                                            </div>

                                        </div>
                                    </Link>
                                    {/* logo ,title, view comments div */}
                                    <div className='flex mt-3  space-x-2'>
                                        <div className='flex items-start'>
                                            {/* logo image */}

                                            <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
                                                <Link to="/user/567"><img className="h-full w-full rounded-full overflow-hidden" src={item?.user?.profilePic} alt="" /></Link>

                                            </div>
                                        </div>
                                        {/* title div */}
                                        <div>
                                            <span className='ml-1 text-sm font-bold line-clamp-2'>{item?.title}</span>
                                            <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                                                {item?.user?.channelName}
                                                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                                            </span>
                                            <div className='flex text-gray-600 font-normal text-[12px]'>
                                                <span className=''>1.2k views</span>
                                                <span className='text-[24px] leading-none font-bold relative top-[-10px] mx-1 -z-30'>.</span>
                                                <span>{item?.createdAt.slice(0, 10)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Home
