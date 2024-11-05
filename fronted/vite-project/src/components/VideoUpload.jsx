import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const VideoUpload = () => {
  const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField, [name]: event.target.value
    })

  }

  // video and image upload
  const uploadImage = async (e, type) => {
    setLoader(true)
    const files = e.target.files;
    // console.log(files)
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'youtube_clone');
    try {
      // cloudName="dgukulxqa"
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dgukulxqa/${type}/upload`, data)
      // console.log(response);
      const Url = response.data.url;
      setLoader(false);
      let val = type === "image" ? "thumbnail" : "videoLink"
      setInputField({
        ...inputField, [val]: Url
      })


    } catch (err) {
      setLoader(false);
      console.log(err)
    }
  }
  console.log(inputField);

  useEffect(() => {
    let isLogin = localStorage.getItem("userId");
    if (isLogin === null) {
      navigate('/')
    }
  }, [])

  console.log(inputField)
  const handleSubmitFunc = async () => {
    setLoader(true);
    await axios.post('http://localhost:5000/api/video', inputField, { withCredentials: true }).then((res) => {
      console.log(res)
      setLoader(false);
      // window.location.reload();
      navigate('/')
    }).catch(err => {
      console.log(err);
      setLoader(false);
    })
  }

  return (
    <div className="videoUpload xl:mt-3 mt-10">
      <div className="md:w-[100%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="uploadVideoTitle">
          <img src={logo} alt="" className="w-36" />

        </div>
        <form className="space-y-6" action="#">
          <div>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
             dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title of video" required
              value={inputField.title} onChange={(e) => handleOnChangeInput(e, "title")} />
          </div>
          <div>
            <input type="text" placeholder="Description" className="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
           dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
              value={inputField.description} onChange={(e) => handleOnChangeInput(e, "description")} />
          </div>
          <div>
            <input type="text" placeholder="Category" className="bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
              value={inputField.videoType} onChange={(e) => handleOnChangeInput(e, "videoType")} />
          </div>
          <div><snap className="text-gray-400">Thumbnail</snap>
            <input type="file" placeholder="Password" className="bg-gray-50  border-gray-300
           text-gray-900 text-sm rounded-lg  block w-full p-2.5" required accept="image/*" onChange={(e) => uploadImage(e, "image")} />
          </div>
          <div><snap className="text-gray-400">Video</snap>
            <input type="file" placeholder="Password" className="bg-gray-50  border-gray-300
          text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required accept="video/*,video/mp4 ,video/web" onChange={(e) => uploadImage(e, "video")} />
          </div>
          <div className='grid grid-cols-1 gap-5 f'>
            <button type="submit" className="w-full md:h-9 lg:h-9 text-black font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400"onClick={handleSubmitFunc} >Upload </button>
            <Link to="/"><button type="submit" className="w-full md:h-9 lg:h-9  text-black font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center bg-gray-300 hover:bg-gray-400">Home</button></Link>
          </div>

        </form>
        <div className="mt-2">
          {loader && <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>}

        </div>
      </div>
    </div>
  )
}

export default VideoUpload
