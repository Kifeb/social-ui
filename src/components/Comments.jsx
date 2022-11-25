import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"

const Comments = () => {

  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className='comments'>
      <div className="flex items-center justify-between gap-3 my-5">
        <img src={currentUser.profilePic} alt="" className='w-8 h-8 rounded-full bg-cover'/>
        <input type="text" placeholder='Write a Comment' className='w-full px-2 py-2 border border-1 border-slate-500 rounded-md' />
        <button className='px-3 py-2 bg-green-600 text-white rounded-md'>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="flex my-5 justify-between gap-5">
          <img src={comment.profilePicture} alt="" className='w-8 h-8 rounded-full bg-cover' />
          <div className="w-10/12">
            <span className='font-bold'>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="text-xs text-slate-500 flex items-center">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments