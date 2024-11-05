/* eslint-disable react-hooks/exhaustive-deps */
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import Suggetion from "./Suggetion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiDislike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { PiCrownSimple } from "react-icons/pi";
import { toast, ToastContainer } from 'react-toastify'


const VideoId = () => {
  // const [data, setData] = useState(0);
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const fetchVedioById = async () => {
    await axios.get(`http://localhost:5000/api/getVideoById/${id}`).then((resopnse) => {
      console.log(resopnse.data.video);
      setValue(resopnse.data.video);
      setVideoUrl(resopnse?.data?.video?.videoLink)
    }).catch(err => {
      console.log(err);

    })
  }

  const getCommentByVideoId = async () => {
    await axios.get(`http://localhost:5000/commentApi/comment/${id}`).then((resopnse) => {
      console.log();
      setComments(resopnse.data.comments)

    }).catch(err => {
      PiCrownSimple.log(err)
    })
  }



  useEffect(() => {
    fetchVedioById();
    getCommentByVideoId()
  }, [])

  const handlecomment = async () => {
    const body = {
      "message": message,
      "video": id
    }
    await axios.post('http://localhost:5000/commentApi/comment', body, { withCredentials: true }).then((res) => {
      console.log(res);
      const newComment=res.data.comment;
      setComments([newComment,...comments]);
      setMessage("")
    }).catch(err => {
      console.log(err)
      toast.error("please login first to comment")

    })

  }

  // const handleClick1 = () => {
  //   setData(data + 1);
  // };
  // console.log(message);

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row md:ml-28">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[500px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            {value && <ReactPlayer
              url={videoUrl}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />}
          </div>


          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            <snap>{value?.title}</snap>
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <Link to={`/user/${value?.user?._id}`} className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={value?.user?.profilePic}
                  />
                </Link>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    <snap>{value?.user?.channelName}</snap>
                    <BsFillCheckCircleFill className=" text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                  </div>
                  <div className=" text-sm">
                    <snap>34.5M subscribers</snap>
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              {/* like and dislike button */}
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-gray-100 hover:bg-gray-200">
                <AiOutlineLike className="text-xl mr-2" />
                <snap className="mr-2">{value?.like}</snap>

                <div className="demo  w-0 h-5 border solid"></div>
                <BiDislike className="text-lg ml-2" />
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-gray-100  hover:bg-gray-200 ml-4">
                <snap> 34.M Views</snap>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            <snap>description</snap>
          </div>
          <div className=" gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            <div className="comment_section font-bold">{comments.length}</div>
            <div className=" h-11 w-11 rounded-full overflow-hidden mt-3">
              <img className="h-full w-full object-cover"
                src={value?.user?.profilePic}
              />
            </div>
            <div className="ml-14 mt-[-40px] flex flex-col w-[90%]">
              <input type="text" placeholder="Add a comment..." className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1" value={message}
                onChange={(e) => { setMessage(e.target.value) }}></input>
              <div className=" flex justify-end gap-4 mt-3  align-middle">

                <div className="cancelcomment font-normal bg-gray-100">Cancel</div>
                <div className="cancelcomment font-normal bg-gray-100" onClick={handlecomment}>Comment</div>
              </div>
            </div>

            {/* other comments */}
          </div>
          {
            comments.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="  flex flex-col h-11 w-11 rounded-full overflow-hidden mt-3">
                    <img className="h-full w-full object-cover"
                      src={item?.user?.profilePic}
                    />
                  </div>
                  <div className="flex gap-3 mt-[-50px] ml-14">
                    <div className="font-medium">{item?.user?.channelName}</div>
                    <div className="font-light text-md mt-0 text-gray-600">{item?.createdAt.slice(0, 10)}</div>
                  </div>
                  <div className="ml-14">{item?.message}</div>
                </div>

              )
            })
          }

        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px] scrollbar-none">
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
          <Suggetion />
        </div>
      </div>
      <ToastContainer />
    </div>

  )
}

export default VideoId
