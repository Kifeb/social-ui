import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/Posts"

const Profile = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="bg-slate-200">
      <div className="relative h-80 w-full">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cover" className="w-full h-full object-cover" />
        <img src={currentUser.profilePic} alt="profile" className="w-[200px] h-[200px] absolute object-cover left-0 right-0 m-auto top-[200px] rounded-full"/>
      </div>
      <div className="py-5 px-2">
        <div className="h-56 rounded-3xl bg-white p-5 flex items-center justify-center mb-5">
          <div className="flex-1 flex flex-col lg:flex-row gap-2 text-gray-700">
            <a href="http://facebook.com" className='hover:text-black'>
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" className='hover:text-black'>
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" className='hover:text-black'>
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" className='hover:text-black'>
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" className='hover:text-black'>
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-2">
            <span className='text-2xl font-bold'>Jhon Doe</span>
            <div className="flex w-full justify-around">
              <div className="flex items-center gap-1 text-gray-700">
                <PlaceIcon />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <LanguageIcon />
                <span>ID</span>
              </div>
            </div>
            <button className='py-2 px-14 rounded-md bg-blue-600 hover:bg-blue-900 text-white'>Follow</button>
          </div>
          <div className="flex-1 flex justify-end">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile