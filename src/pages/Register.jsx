import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login'>
    <div className="flex bg-white rounded-md h-screen md:h-[500px] w-screen lg:w-8/12 md:w-10/12 md:flex-row flex-col overflow-hidden">
      <div className="flex-1 flex flex-col justify-around p-12 gap-1 h-44 md:h-full">
        <h1 className='md:text-6xl text-4xl font-bold text-slate-600'>Register</h1>
        <form className='flex flex-col'>
          <input className='input' type="email" placeholder='Email'/>
          <input className='input' type="text" placeholder='Username'/>
          <input className='input' type="text" placeholder='Name'/>
          <input className='input' type="password" placeholder='Password' />
          <Link href="/">
            <button className='px-10 py-2 rounded-lg bg-purple-900 text-white font-bold cursor-pointer my-2'>Register</button>
          </Link>
        </form>
      </div>
      <div className="flex-1 h-44 md:h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 bg-cover bg-no-repeat p-14 flex flex-col gap-8" style={{backgroundImage: "url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}>
        <h1 className='text-6xl text-white font-semibold'>Kifeb Social</h1>
        <p className='text-white xl:mb-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequatur recusandae aliquam quis, fuga alias delectus. </p>
        <span className='text-white font-bold -mb-5'>Don Have Account ?</span>
        <Link to="/login">
          <button className='px-10 py-2 rounded-lg bg-white text-purple-900 font-bold cursor-pointer'>Login</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register