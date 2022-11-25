import React from 'react'
import Stories from "../components/Stories"
import Share from "../components/Share"
import Posts from "../components/Posts"

const Home = () => {
  return (
    <div className='bg-slate-200 min-w-screen-mobile py-3 px-2'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home