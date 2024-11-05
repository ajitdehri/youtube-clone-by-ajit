/* eslint-disable no-unused-vars */
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box';
import 'react-toastify/dist/ReactToastify.css';
import LinearProgress from '@mui/material/LinearProgress';
import logo from "../assets/logo.png"

const SignUp = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
  const [singUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": uploadedImageUrl });
  const [progressBar, setProgressBar] = useState(false);
  const navigate = useNavigate();
  const handleInputField = (event, name) => {
    setSignUpField({
      ...singUpFiled, [name]: event.target.value
    })

  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    // console.log(files)
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'youtube_clone');
    try {
      // cloudName="dgukulxqa"
      setProgressBar(true)
      const response = await axios.post("https://api.cloudinary.com/v1_1/dgukulxqa/image/upload", data)
      // console.log(response);
      setProgressBar(false)
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
        ...singUpFiled, "profilePic": imageUrl
      })
    } catch (err) {
      console.log(err)
    }
  }
  const handleSignup = () => {
    setProgressBar(true)
    axios.post('http://localhost:5000/auth/signUp', singUpFiled).then((res) => {
      toast.success(res.data.message);
      setProgressBar(false)
      navigate("/");

      // console.log(res);

    }).catch(err => {
      // console.log(err);
      setProgressBar(false)
      toast.error(err)
    })

  }
  return (
    <div className="signUp mt-5">



      <div className="md:w-[900px] max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

        <form className="space-y-6" action="#">
          <div className="text-xl font-medium text-gray-900  dark:text-white">
            <div className="uploadVideoTitle mt-[-10px]">
              <img src={logo} alt="" className="w-36" />

            </div>

          </div>
          <div>

            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
               dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Channel Name" required
              value={singUpFiled.channelName} onChange={(e) => handleInputField(e, "channelName")}
            />
          </div>
          <div>

            <input type="text" placeholder="User Name'" className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
              value={singUpFiled.userName} onChange={(e) => handleInputField(e, "userName")}

            />
          </div>
          <div>

            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Password" required
              value={singUpFiled.password} onChange={(e) => handleInputField(e, "password")}
            />
          </div>
          <div>

            <input type="text" placeholder="About your Channel" className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
               dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
              value={singUpFiled.about} onChange={(e) => handleInputField(e, "about")}

            />
          </div>
          <div>

            <input type="file" placeholder="About your Channel" className="bg-gray-50 border border-white
               text-gray-900 text-sm rounded-lg  block w-full p-2.5
              " required
              onChange={(e) => uploadImage(e)}

            />
            <div className='image_upload_signup_div flex'>
              <img className='image_default_signUp' src={uploadedImageUrl} />

            </div>
          </div>


          <div className='grid grid-cols-1 gap-5 f'>
            <button type="submit" className="w-full md:h-9 lg:h-9 text-black font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400" onClick={handleSignup} >SignUp </button>

            <Link to="/"><button type="submit" className="w-full md:h-9 lg:h-9  text-black font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400" >Home</button></Link>
          </div>

        </form>
        <div className='mt-3'>
          {progressBar && <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>}

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp
