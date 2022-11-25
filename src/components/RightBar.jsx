import React, { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const RightBar = () => {

  const [rightbar, setRightBar] = useState(false)

  return (
    <>
    <button className={`transition-all md:hidden fixed right-2`} onClick={() => setRightBar(!rightbar)}>
      <KeyboardDoubleArrowLeftIcon />
    </button>
    <div className={`bg-slate-200 flex-3 md:sticky fixed top-14 height overflow-scroll z-30 transition-all ${rightbar ? 'right-0' : '-right-96'}`}>
      <div className="">
        <div className="py-4 px-6 mb-5 bg-white shadow-lg relative">
          <button className='absolute right-5 md:hidden' onClick={() => setRightBar(true)}>
            <KeyboardDoubleArrowRightIcon />
          </button>
          <span className='text-gray-700'>Sugggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="suggest for you" className='imgRight' />
              <span>Jhon Doe</span>
            </div>
            <div className="buttons">
              <button className='py-2 px-3 rounded-lg bg-blue-600 text-xs text-white'>Follow</button>
              <button className='py-2 px-3 rounded-lg bg-red-600 text-xs text-white'>Dismis</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="suggest for you" className='imgRight' />
              <span>Jhon Doe</span>
            </div>
            <div className="buttons">
              <button className='py-2 px-3 rounded-lg bg-blue-600 text-xs text-white' >Follow</button>
              <button className='py-2 px-3 rounded-lg bg-red-600 text-xs text-white'>Dismis</button>
            </div>
          </div>
        </div>
        <div className="py-4 px-6 mb-5 bg-white shadow-lg">
          <span className='text-gray-700'>Activities</span>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user image" className='imgRight'/>
              <p className='text-slate-400 text-xs'>
                <span className='text-black text-base'>Jane Doe</span> changed
              </p>
            </div>
            <span className='text-slate-400 text-sm'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user image" className='imgRight'/>
              <p className='text-slate-400 text-xs'>
                <span className='text-black text-base'>Jane Doe</span> changed
              </p>
            </div>
            <span className='text-slate-400 text-sm'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user image" className='imgRight'/>
              <p className='text-slate-400 text-xs'>
                <span className='text-black text-base'>Jane Doe</span> changed
              </p>
            </div>
            <span className='text-slate-400 text-sm'>1 min ago</span>
          </div>
        </div>
        <div className="py-4 px-6 mb-5 bg-white shadow-lg">
          <span className='text-gray-700'>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="" className='imgRight' />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="" className='imgRight'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="" className='imgRight'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RightBar