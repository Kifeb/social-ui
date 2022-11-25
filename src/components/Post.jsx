import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "./Comments"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {

  const [CommentOpen, SetCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false)

  return (
    <div className='post'>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center my-2">
            <img src={post.profilePic} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <Link to={`/profile/${post.userId}`} className="no-underline">
                <span>{post.name}</span>
              </Link>
              <span className="text-xs text-slate-500">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="my-5">
          <p>{post.desc}</p>
          <img src={post.img} alt="" className="w-full max-h-[300px] md:max-h-[600px] object-cover my-2"/>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer text-sm" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlinedIcon className="text-red-700"/> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-sm" onClick={() => SetCommentOpen(!CommentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {CommentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post