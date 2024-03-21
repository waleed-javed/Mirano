import React from 'react'
import logo from  '../assets/logo.png';
import globe from '../assets/HomePage/globe.png';
import slack from '../assets/HomePage/slack.png';
import Office from '../assets/HomePage/Office.png';
import facebook from '../assets/HomePage/facebook.png';
import apple from '../assets/HomePage/apple.png';
import google from '../assets/HomePage/google.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <div className="container bg-amber-50 h-auto ">
   <nav class=" border-b border-black bg-slate-50 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
        <img src={logo} class="h-12" alt="Flowbite Logo" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">Mirano</span>
    </a>
   
    <div className="flex items-center">
  <img className="w-5 h-5 mr-2" src={globe} alt="Globe Png" />
  
  <button className=" text-black  hover:text-blue-400  rounded focus:outline-none focus:shadow-outline">
    EN
  </button>
  <button className="mx-7 border-2 rounded-2xl w-24 h-14 hover:bg-black hover:text-white">Sign Up</button>
</div>
  </div>
</nav>
<div className="container flex justify-center h-auto">
<form action="/" className="bg-white border border-black  rounded-lg w-3/6 mt-28 mb-10">
<h3 className="text-black text-5xl pl-12 pt-8">Sign in to Mirano</h3>
<a href="#">
<button class="flex items-center justify-center hover:bg-black border-2 border-black rounded-lg text-3xl text-black hover:text-white ml-12 w-5/6 h-12 mt-5">
  <img src={google} alt="Google" className="w-8 h-8  "/>
  <span className="text-xl mb-1">Continue with Google</span>
</button>
</a>
<button className="border-2 border-black hover:bg-black  w-36 h-16 ml-12 mt-4 rounded-lg "><img className="h-11 w-12 ml-10" src={slack} alt="Slack Logo" /></button>
<button className="border-2 border-black hover:bg-black  w-36 h-16  ml-5 mt-4 rounded-lg "><img className="h-11 w-12 ml-10" src={Office} alt="MS-office Logo" /></button>
<button className="border-2 border-black hover:bg-black  w-36 h-16 ml-5 mt-4 rounded-lg "><img className="h-11 w-12 ml-10" src={facebook} alt="Facebook Logo" /></button>
<button className="border-2 border-black hover:bg-black  w-36 h-16 ml-4 mt-4 rounded-lg "><img className="h-11 w-12 ml-10 " src={apple} alt="Apple Logo" /></button>
<hr class="border-b border-black mt-7 w-5/6 ml-12" />
<p className="text-lg text-black ml-12 mt-6">Email</p>
<input type="text" className="text-xl ml-12 hover:border-blue-400 border-2 rounded-lg w-5/6 h-12 pl-4"  placeholder="Enter your email address" />
<p className="text-lg text-black ml-12 mt-6">Password</p>
<input type="text" className="text-xl ml-12 hover:border-blue-400 border-2 rounded-lg w-5/6 h-12 pl-4"  placeholder="Enter your email password" />
<a href="#"><button className=" text-start text-lg text-blue-500 hover:bg-slate-200 rounded-md underline ml-12 mt-6 w-5/6">Forgot Password?</button></a>

 <Link to="/Home"> <button className=" hover:bg-blue-800 bg-blue-700 text-white  w-5/6 h-10 ml-12 mt-4 rounded-lg">Continue with email</button></Link>

<a href="#"><button className="text-start   h-10  mt-4 mb-2 ml-12 w-5/6 rounded-lg hover:bg-slate-50">You can also continue with SSO</button></a>

</form>
</div>

</div>

  )
}

export default LoginPage
