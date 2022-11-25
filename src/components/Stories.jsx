import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className='flex gap-3 lg:h-64 lg:mb-8 py-3 -z-40'>
      <div className="flex-1 lg:rounded-xl w-20 h-20 lg:w-full lg:h-full rounded-full overflow-hidden relative">
        <img src={currentUser.profilePic} alt="" className='object-cover h-full w-full'/>
        <span className='absolute bottom-3 left-3 text-white font-medium'>{currentUser.name}</span>
        <button className='absolute bottom-4 right-5 text-white bg-blue-800 w-5 h-5 rounded-full cursor-pointer flex items-center justify-center'>+</button>
      </div>
      {stories.map(story => (
        <div className="flex-1 rounded-full lg:rounded-xl lg:w-full lg:h-full overflow-hidden relative w-20 h-20 bg-red-300" key={story.id}>
          <img src={story.img} alt="" className="w-full h-full object-cover"/>
          <span className='absolute bottom-3 left-3 text-white font-medium'>{story.name}</span>
        </div>        
      ))}
    </div>
  )
}

export default Stories