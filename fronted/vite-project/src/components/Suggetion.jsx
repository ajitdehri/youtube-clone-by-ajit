import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Suggetion = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex mb-3 ">
          <div className="  relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ytimg.com/vi/MwJideiUmeQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFP-JhlVY-4QCAMpaGxJMHyN4fPg"
            />
            
            <div className=''>
            <span className=' absolute bottom-2 right-2 bg-black text-white text-xs '>1:34:34</span>
          </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 ">
             <snap>#Anu_Dubey का ये छठ गीत महिलायों के बीच बहुत ही पसंद किया जा रहा है || - सवा लाख के साड़ी भीजे</snap>
            </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2  flex items-center">
              <snap>Bhojpuri Bhakti Geet</snap>
                <BsFillCheckCircleFill className=" text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden">
              <span>34.5k views</span>
              <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">3month ago</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Suggetion
