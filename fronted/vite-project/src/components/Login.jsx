/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import logo from "../assets/logo.png"

// import axios from 'axios';
const Login = ({ setLoginModal }) => {
    // input handle by usestate

    const [loginFiled, setLoginField] = useState({ "userName": "", "password": "" });
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    // console.log(loginFiled);
    const handleOnChangeInput = (event, name) => {
        setLoginField({
            ...loginFiled, [name]: event.target.value
        })
    }

    const handleLoginFun = async () => {
        setLoader(true)
        axios.post("http://localhost:5000/auth/login", loginFiled, { withCredentials: true }).then((resp => {
            setLoader(false)
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("userId", resp.data.user._id)
            localStorage.setItem("userProfilePic", resp.data.user.profilePic)
            window.location.reload();
            navigate("/");
        })).catch(err => {
            toast.error("Invalid Credentials")
            console.log(err)
            setLoader(false)
        })
    }


    return (
        <div className='login md:w-[200px] '>
            <div className="login_card">
                <div className="md:w-[900px] max-w-sm p-4 mt-48 md:mt-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <div className="text-xl font-medium text-gray-900  dark:text-white">
                            <div className="uploadVideoTitle">
                                <img src={logo} alt="" className="w-36" />

                            </div>

                        </div>
                        <div>

                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                              dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="UserName" required
                                value={loginFiled.userName} onChange={(e) => handleOnChangeInput(e, "userName")} />
                        </div>
                        <div>

                            <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                value={loginFiled.password} onChange={(e) => handleOnChangeInput(e, "password")}
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded
                                     bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600
                                      dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>

                        <div className='grid grid-cols-1 gap-5 f'>
                            <button type="submit" className="w-full md:h-9 lg:h-9 text-black font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400" onClick={handleLoginFun} >Login </button>
                            {/* <Link to="/signup"> <button type="submit" className="w-full md:h-9 lg:h-9  text-black font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400" onClick={() => setLoginModal()}>SignUp</button></Link> */}
                            <button type="submit" className="w-full md:h-9 lg:h-9  text-black font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400" onClick={() => setLoginModal()}>cancel</button>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500" onClick={() => setLoginModal()}>Create account</Link>
                        </div>
                    </form>
                </div>
                <div className="mt-2">
                    {loader && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
