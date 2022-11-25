import React, { useContext } from 'react'
import Image from "../assets/img.png";
import Map from "../assets/map.png";
import Friend from "../assets/friend.png";
import { AuthContext } from '../context/AuthContext'

const Share = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='rounded-3xl mb-3 bg-white'>
      <div className="p-5">
        <div className="flex items-center gap-5 mb-2">
          <img src={currentUser.profilePic} alt="" className='w-10 h-10 rounded-full bg-cover'/>
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} className="py-5 px-3 w-3/4 focus:border-teal-500 focus:outline-none focus:ring-1 focus:rounded-xl"/>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 my-5">
            <input type="file" className='hidden' />
            <label htmlFor="file">
              <div className="flex items-center gap-2 lg:gap-4 flex-col lg:flex-row cursor-pointer">
                <img src={Image} alt="Image" className='h-5 lg:h-8' />
                <span className='text-xs lg:text-base'>Add Image</span>
              </div>
            </label>
            <div className="flex items-center gap-2 lg:flex-row flex-col cursor-pointer">
              <img src={Map} alt="" className='h-5 lg:h-8'/>
              <span className='text-xs lg:text-base'>Add Place</span>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row cursor-pointer">
              <img src={Friend} alt="" className='h-5 lg:h-8' />
              <span className='text-xs lg:text-base'>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button className='lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 text-white rounded-xl'>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share