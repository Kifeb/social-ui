import React, { useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/")
  }

  return (
    <div className='login'>
      <div className="flex bg-white rounded-md h-screen md:h-[500px] w-screen lg:w-8/12 md:w-10/12 md:flex-row flex-col overflow-hidden">
        <div className="flex-1 h-44 md:h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 bg-cover bg-no-repeat p-14 flex flex-col gap-8" style={{backgroundImage: "url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}>
          <h1 className='text-6xl text-white font-semibold'>Kifeb Social</h1>
          <p className='text-white xl:mb-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequatur recusandae aliquam quis, fuga alias delectus. </p>
          <span className='text-white font-bold -mb-5'>Don't Have Account ?</span>
          <Link to="/register">
            <button className='px-10 py-2 rounded-lg bg-white text-purple-900 font-bold cursor-pointer'>Register</button>
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-around p-12 gap-1 h-44 md:h-full">
          <h1 className='text-6xl font-bold text-slate-600'>Login</h1>
          <form className='flex flex-col'>
            <input className='border-b border-b-slate-400 px-2 py-3 mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500' type="text" placeholder='Username...'/>
            <input className='border-b border-b-slate-400 px-2 py-3 mb-8 focus:outline-none focus:ring-1 focus:ring-purple-500' type="password" placeholder='Password..' />
            <button className='px-10 py-2 rounded-lg bg-purple-900 text-white font-bold cursor-pointer' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login