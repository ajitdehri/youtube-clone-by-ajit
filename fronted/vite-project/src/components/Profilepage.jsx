import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


const Profilepage = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState();

    const fetchProfileData = async () => {
        axios.get(`http://localhost:5000/api/${id}/channel`).then((response) => {
            console.log(response);
            setData(response.data.video);
            setUser(response.data.video[0]?.user)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchProfileData()
    }, [])

    return (

        <div className="profile mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-4 p-5">

            {/* profile top section start*/}
            <div className="profile_page">
                <div className="profile_top_section">
                    <div className="profile_top_section_profile mt-6 ml-24 ">
                        <img className="profile_top_section_img" src={user?.profilePic} alt="img" />

                    </div>

                    <div className="profile_top_section_About ">
                        <div className="profile_top_section_About_Name mt-6">{user?.channelName}</div>
                        <div className="profile_top_section_info">
                            {user?.userName}. {data?.length} videos
                        </div>
                        <div className="profile_top_section_info">{user?.about}</div>

                    </div>

                </div>
                {/* profile bottom section */}
                <div className="profile_videos">
                    <div className="profile_videos_title gap-2 ">
                        <snap className="">Home</snap>
                        <snap>Videos</snap>
                        <snap>Shorts</snap>
                        <snap>Live</snap>
                        <snap>Playlists</snap>
                        <snap>Comminity</snap>
                        <snap><IoSearchSharp /></snap>
                    </div>

                    <div className="profileVideos grid grid-cols-1   ">
                        {
                            data.map((item, index) => {
                                return (

                                    <Link key={index} to={`/watch/${item?._id}`} className="profileVideo_block">
                                        <div className=" profileVideo_block_thumbnail">
                                            <img src={item?.thumbnail} alt="img" className="profileVideo_block_thumbnail_img" />
                                        </div>
                                        <div className="profileVideo_block_detail">
                                            <div className="profileVideo_block_detail_name">{item?.title.slice(0, 20)}</div>
                                            <div className="profileVideo_block_detail_about">{item?.createdAt.slice(0, 10)}</div>

                                        </div>

                                    </Link>

                                )
                            })
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilepage
