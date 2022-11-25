import React, { useContext, useState } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  const [rightbar, setRightBar] = useState(false)

  return (
    <div className="navbar">
      <div className='flex items-center gap-4 lg:gap-8 cursor-pointer'>
        <Link to="/">
          <span className='text-bold text-xl md:block font-extrabold text-blue-900'>KIFEBSOCIAL</span>
        </Link>
        <HomeOutlinedIcon />
        <EmailOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="flex-1 items-center gap-1 border border-slate-400 w-32  md:min-w-fit lg:w-[400px] rounded-md p-1 hidden md:flex">
          <SearchOutlinedIcon />
          <input type="text" placeholder='search...' className='focus:outline-none bg-transparent w-full text-slate-600' />
        </div>
      </div>
      <div className="justify-around items-center gap-4 lg:gap-8 font-medium px-1  cursor-pointer hidden md:flex">
        <PersonOutlinedIcon />
        <WbSunnyOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Link to={`/profile/${currentUser.id}`} className="flex items-center gap-2 font-medium">
          <img src={currentUser.profilePic} alt="" className='w-7 h-7 rounded-full object-cover' />
          <span className='hidden md:inline'>Kifeb</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar