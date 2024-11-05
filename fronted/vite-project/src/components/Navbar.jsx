/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";


const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
    const [userPic, setUserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
    const [navbarModel, setNavbarModel] = useState(false);
    const [login, setLogin] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [searchbar, setSearchbar] = useState(false);
    const navigate = useNavigate();
    const handleClickModal = () => {
        setNavbarModel(prev => !prev);
    }

    const sideNavbarFunc = () => {
        setSideNavbarFunc(!sideNavbar)
    }
    const handleProfile = () => {
        let userId = localStorage.getItem("userId")
        navigate(`/user/${userId}`);
        setNavbarModel(false);
    }

    const setLoginModal = () => {
        setLogin(false)
    }

    const onclickofPopUpOption = (button) => {
        setNavbarModel(false);
        if (button == "login") {
            setLogin(true);

        } else {
            localStorage.clear();
            getLogoutFun();
            setTimeout(() => {
                navigate('/')
                window.location.reload();
            }, 1000)


        }
    }
    const getLogoutFun = async () => {
        axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true }).then((res) => {
            console.log("Logout")
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        let userProfilePic = localStorage.getItem("userProfilePic");
        setIsLogedIn(localStorage.getItem("userId") !== null ? true : false);
        if (userProfilePic !== null) {
            setUserPic(userProfilePic)
        }

    }, [])

    if (searchbar) {
        return <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
            <IoMdArrowRoundBack  size={42} onClick={()=>setSearchbar(!searchbar)}/>
            <div className="flex flex-grow items-center mx-4">
                <div className="w-[100%]  border rounded-l-full px-3 py-2">
                    <input type="text" placeholder="Search" className=" outline-none ml-2" />
                </div>
                <button className="px-4 py-2 border rounded-r-full bg-gray-100 hover:bg-gray-200">
                    <CiSearch size={"24px"} />
                </button>



            </div>
            <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />
           

        </div>

    }
    return (
        <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
            <div className=" flex items-center space-x-4 " >
                <AiOutlineMenu size={"43px"} className="ml-3 hover:border hover:rounded-full p-2 cursor-pointer hover:bg-gray-200 " onClick={sideNavbarFunc} />
                <Link to={"/"}><img src={logo} alt="" className="w-28 cursor-pointer" /></Link>
            </div>

            <div className="hidden md:flex w-[45%] items-center">
                <div className="w-[100%]  border rounded-l-full px-3 py-2">
                    <input type="text" placeholder="Search" className=" outline-none ml-2" />
                </div>
                <button className="px-4 py-2 border rounded-r-full bg-gray-100 hover:bg-gray-200">
                    <CiSearch size={"24px"} />
                </button>

                <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />

            </div>
            <div className=" flex  space-x-5 items-center ">
                <CiSearch size={"30px"} className="text-2xl md:hidden" onClick={() => setSearchbar(!searchbar)} />
                <Link to="111/upload"><RiVideoAddLine size={"40px"} className=" ml-3 hover:border hover:rounded-full p-2 cursor-pointer hover:bg-gray-200" /></Link>
                <AiOutlineBell size={"40px"} className=" ml-3 hover:border hover:rounded-full p-2 cursor-pointer hover:bg-gray-200" />
                <img src={userPic} alt="logo" className="navbar-right-logo" onClick={handleClickModal} />
                {
                    navbarModel &&
                    <div className="navbar-modal">
                        {isLogedIn && <div className="navbar-modal-option" onClick={handleProfile}>Profile</div>}
                        {isLogedIn && <div className="navbar-modal-option" onClick={() => onclickofPopUpOption("logout")}>Logout</div>}
                        {!isLogedIn && <div className="navbar-modal-option" onClick={() => onclickofPopUpOption("login")}>Login</div>}
                    </div>
                }

            </div>

            {
                login && <Login setLoginModal={setLoginModal} />
            }

        </div>
    )
}

export default Navbar
