/* eslint-disable react/prop-types */
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";

const Sidebar = ({sideNavbar}) => {

    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <TiHome />,
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />,
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
    ];
    const sidebarItems2 = [
        {
            id: 1,
            name: "Your Channel",
            icon: <PiUserSquareThin />,
        },
        {
            id: 2,
            name: "History",
            icon: <MdHistory />,
        },
        {
            id: 3,
            name: "Playlists",
            icon: <MdOutlineSubscriptions />,
        },
        {
            id: 4,
            name: "Your Videos",
            icon: <BiVideo />,
        },
        {
            id: 5,
            name: "Watch later",
            icon: <MdOutlineWatchLater />,
        },
        {
            id: 6,
            name: "Liked videos",
            icon: <AiOutlineLike />,
        },
    ];
    const sidebarItems3 = [
        {
            id: 1,
            name: "Trending",
            icon: <SiTrendmicro />,
        },
        {
            id: 2,
            name: "Shopping",
            icon: <HiOutlineShoppingBag />,
        },
        {
            id: 3,
            name: "Music",
            icon: <SiYoutubemusic />,
        },
        {
            id: 4,
            name: "Movies",
            icon: <PiFilmSlateLight />,
        },
        {
            id: 5,
            name: "Live",
            icon: <CgMediaLive />,
        },
        {
            id: 6,
            name: "Gaming",
            icon: <IoGameControllerOutline />,
        },
        {
            id: 7,
            name: "News",
            icon: <FaRegNewspaper />,
        },
        {
            id: 8,
            name: "Sport",
            icon: <TfiCup />,
        },
        {
            id: 9,
            name: "Courses",
            icon: <SiStylelint />,
        },
        {
            id: 10,
            name: "Fashion & beauty",
            icon: <PiLightbulbLight />,
        },
        {
            id: 11,
            name: "Padcasts",
            icon: <MdPodcasts />,
        },
    ];
    const sidebarItems4 = [
        {
            id: 1,
            name: "Youtube Premium",
            icon: <FaYoutube />,
        },
        {
            id: 2,
            name: "Youtube Studio",
            icon: <SiYoutubestudio />,
        },
        {
            id: 3,
            name: "Youtube Music",
            icon: <SiYoutubemusic />,
        },
        {
            id: 4,
            name: "Youtube Kids",
            icon: <SiYoutubekids />,
        },
    ];
    const sidebarItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />,
        },
        {
            id: 2,
            name: "Report history",
            icon: <MdOutlineOutlinedFlag />,
        },
        {
            id: 3,
            name: "Help",
            icon: <IoHelpCircleOutline />,
        },
        {
            id: 4,
            name: "Send feedback",
            icon: <RiFeedbackLine />,
        },
    ];
    return (
            <div className={sideNavbar?" home-sidebar px-6 w-[32%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden scrollbar-thin ":"hidden"}>

                {/* Home */}

                <div className=" space-y-2 items-center ">
                    {sidebarItems.map((item) => {
                        return (
                            <div key={item.id}
                                className="flex items-center h-10 space-x-6 hover:bg-gray-100 duration-200 rounded-lg p-1">
                                <div className="text-xl cursor-pointer ml-3">{item.icon}</div>
                                <span className="cursor-pointer">{item.name}</span>
                            </div>
                        );
                    })}

                </div>
                <br />
                <hr />
                {/* You */}
                <div className=" space-y-2 items-center">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-semibold">You</h1>
                        <FaChevronRight />
                    </div>
                    {sidebarItems2.map((item) => {
                        return (
                            <div key={item.id}
                                className="flex items-center h-10 space-x-6 hover:bg-gray-100 duration-200 rounded-lg p-1">
                                <div className="text-xl cursor-pointer ml-3 ">{item.icon}</div>
                                <span className="cursor-pointer">{item.name}</span>
                            </div>
                        );
                    })}

                </div>
                <br />
                <hr />

                {/* Explore */}

                <div className=" space-y-2 items-center">
                    <div className="items-center space-x-2">
                        <h1 className=" font-semibold">Explore</h1>
                    </div>
                    {sidebarItems3.map((item) => {
                        return (
                            <div key={item.id}
                                className="flex items-center h-10 space-x-6 hover:bg-gray-100 duration-200 rounded-lg p-1">
                                <div className="text-xl cursor-pointer ml-3">{item.icon}</div>
                                <span className="cursor-pointer">{item.name}</span>
                            </div>
                        );
                    })}

                </div>
                <br />
                <hr />

                {/* More section */}
                <div className=" space-y-2 items-center">
                    <div className="items-center space-x-2">
                        <h1 className=" font-semibold">More From Youtube</h1>
                    </div>
                    {sidebarItems4.map((item) => {
                        return (
                            <div key={item.id}
                                className="flex items-center h-10 space-x-6 hover:bg-gray-100 duration-200 rounded-lg p-1">
                                <div className="text-xl cursor-pointer ml-3 text-red-500 " >{item.icon}</div>
                                <span className="cursor-pointer">{item.name}</span>
                            </div>
                        );
                    })}

                </div>
                <br />
                <hr />
                {/* about */}
                <br/>
                <div className=" space-y-2 items-center">
                    {sidebarItems5.map((item) => {
                        return (
                            <div key={item.id}
                                className="flex items-center h-10 space-x-6 hover:bg-gray-100 duration-200 rounded-lg p-1">
                                <div className="text-xl cursor-pointer ml-3  " >{item.icon}</div>
                                <span className="cursor-pointer">{item.name}</span>
                            </div>
                        );
                    })}

                </div>
                <br />
                <hr />

                {/* footer */}
                <span className="text-xs font-bold text-gray-600 ">
                    About Press Copyright <br /> Contact us Creators <br /> Advertise
                    Developers <br />
                    <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
                    <br /> Test new features
                </span>
                <br />
                <p className="text-xs text-gray-500 mt-3">© 2024 Google llc</p>



            </div>
    )
}

export default Sidebar
