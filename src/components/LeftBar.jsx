import React, { useContext, useState } from 'react'
import Friends from "../assets/friend.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {AuthContext} from "../context/AuthContext"
import { Link } from 'react-router-dom';

const LeftBar = () => {

  const [canvas, setCanvas] = useState(false);

  const {currentUser} = useContext(AuthContext);

  return (
    <>
    <button className={`fixed left-2 top-12 z-50 transition-all lg:hidden ${canvas ? "hidden" : "block"}`} onClick={() => setCanvas(!canvas)}>
      <MenuIcon />
    </button>
    <div className={`flex-2 lg:sticky lg:h-screen fixed top-0 bottom-0 ${canvas ? "right-0" : ""} ${canvas ? "left-0" : "-left-80"} ${canvas ? "z-50" : "z-40"}`}>
      <div className={`w-full bg-white h-full z-50 overflow-scroll scrollbar md:block`}>
        <div className="menu">
          <Link to={`/profile/${currentUser.id}`} className="flex items-center gap-2 py-5 px-11 cursor-pointer">
              <img src={currentUser.profilePic} alt="my image" className='w-8 h-8 rounded-full object-cover' />
              <span className='text-l font-semibold'>{currentUser.name}</span>
          </Link>
          <span className='absolute right-5 top-5 cursor-pointer lg:hidden' onClick={() => setCanvas(false)}>
            <CloseIcon />
          </span>
          <div className="item">
            <img src={Friends} alt="" className='w-8'/>
            <span className='text-sm'>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" className='w-8'/>
            <span className='text-sm'>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" className='w-8'/>
            <span className='text-sm'>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" className='w-8'/>
            <span className='text-sm'>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" className='w-8'/>
            <span className='text-sm'>Memories</span>
          </div>
        </div>
        <hr className='my-y border-1 lg:inline-block hidden'/>
        <div className="menu">
          <span className='pl-10 text-slate-700 mb-2'>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" className='w-8'/>
            <span className='text-sm'>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" className='w-8'/>
            <span className='text-sm'>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" className='w-8'/>
            <span className='text-sm'>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" className='w-8'/>
            <span className='text-sm'>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" className='w-8'/>
            <span className='text-sm'>Messages</span>
          </div>
        </div>
        <hr className='my-3 border-1 lg:inline-block hidden'/>
        <div className="menu">
          <span className='pl-10 text-slate-700 mb-2'>Others</span>
          <div className="item">
            <img src={Fund} alt="" className='w-8'/>
            <span className='text-sm'>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" className='w-8'/>
            <span className='text-sm'>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" className='w-8'/>
            <span className='text-sm'>Courses</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LeftBar