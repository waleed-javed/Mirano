import React from 'react'
import logo from '../assets/logo.png';
import process from '../assets/HomePage/process.png';
import Retros from '../assets/HomePage/Retros.png';
import mind from '../assets/HomePage/Mind.png'
import scaled from '../assets/HomePage/Scaled.png';
import White from '../assets/HomePage/whiteboard.png';
import customer from '../assets/HomePage/customer.png';
import wire from '../assets/HomePage/wire.png';
import startegy from '../assets/HomePage/startegy.png';
import technical from '../assets/HomePage/technical.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from 'react-fast-marquee';
import accenture from '../assets/Marquee/accenture.png';
import asos from '../assets/Marquee/asos.png';
import bumble from '../assets/Marquee/bumble.png';
import conten from '../assets/Marquee/conten.png';
import DocuSign from '../assets/Marquee/DocuSign.png';
import hanes from '../assets/Marquee/hanes.png';
import liberty from '../assets/Marquee/liberty.jpg';
import pepsico from '../assets/Marquee/pepsico.png';
import Total from '../assets/Marquee/Total.png';
import Ubi from '../assets/Marquee/ubi.png';
import whirl from '../assets/Marquee/whirl.png';
import wp from '../assets/Marquee/wp.png';
import Yamaha from '../assets/Marquee/Yamaha.png';
import diagraming from '../assets/HomePage/Diagraming.png';
import product from '../assets/HomePage/product.png';
import planing from '../assets/HomePage/planning.png';
import integration from '../assets/HomePage/integration.png';
import fb from  '../assets/HomePage/fb.png';
import twitter from '../assets/HomePage/twitter.png';
import linkedin from  '../assets/HomePage/linkdin.png';
import yt from '../assets/HomePage/yt.png';
import instagram from  '../assets/HomePage/insta.jpg';
import { Link } from 'react-router-dom';



 const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
     
<div className="container bg-orange-200 h-full ">
<nav className="bg-white border-b-4 border-black ">
<div class="max-w-screen-xl flex  justify-start items-center mx-20 py-3">
    <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
        <img src={logo} class="h-12" alt="Mirano Logo" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">Mirano</span>
    </a>
    <ul className="flex justify-start mx-4 pt-2">
      <li className="text-base mx-2 hover:underline cursor-pointer">What is Mirano</li>
      <li className="text-base mx-3 hover:underline cursor-pointer">Solution</li>
      <li className="text-base mx-3 hover:underline cursor-pointer">Resources</li>
      <li className="text-base mx-3 hover:underline cursor-pointer">Enterprise</li>
      <li className="text-base mx-3 hover:underline cursor-pointer">Pricing</li>
    </ul>
    <div className="flex items-center pl-72">
    <button className="text-base text-black hover:bg-slate-200 hover:underline mx-2 rounded-xl h-10 w-28 cursor-pointer">Contact Sales</button>
    <button className="text-black border-2 border-black hover:bg-black hover:text-white rounded-md mx-2 h-10 w-16 cursor-pointer">Login</button>
    <Link to ="/DB"><button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg mx-2 h-10 w-28 cursor-pointer">Sign up free</button></Link>
    </div>
    </div>    
</nav>
{/* Sticky Content */}
<div className="flex justify-end">
<div className="bg-white border-2 border-black mt-4 h-44 w-84 fixed rounded-2xl mr-16  overflow-auto z-10">
  <h4 className="text-md font-bold pt-6 pl-5 pr-8">Your team's building the next big thing. We're here to help.</h4>
  <div className="flex flex-col mt-4">
  <div className="flex justify-between">
    <p className="text-lg text-right pl-5">Use 2500+ template</p>
    <p className="text-lg pr-6"> Add 100+ integrations</p>
  </div>
  <div className="flex justify-between mt-6">
    <p className="text-lg text-right pl-5">Invite unlimited viewers</p>
    <p className="text-lg pl-5 pr-12">Work on all devices</p>
  </div>
</div>

</div>
</div>

{/* Main-Content */}
<div className="flex justify-center text-center mt-36 ">
  <h1 className="text-6xl ">
   <p> Think and create. All in one</p> 
<p>visual workspace.
</p></h1>
</div>
<div className="flex justify-center text-center mt-5">
  <div className="max-w-screen-md">
    <p className="text-lg mt-2 tracking-tighter">Go from brainstorm to execution, all in one place.</p>
    <p className="text-lg tracking-tighter">Miro is your team's collaborative online workspace.</p>
  </div>
</div>
<div className="flex justify-center mt-9 flex-col items-center ">
  
    <input type="text" placeholder="Enter your Work email" className="w-96 h-12 rounded-lg pl-4 border hover:border-sky-600"/>
    <button className="text-white bg-blue-500 hover:bg-blue-700 h-12 w-96 rounded-xl mt-3">Sign up free </button>
  <p className="mt-4 w-96 text-center tracking-tighter">Keep work and life separate by using your work email</p>
</div>
<div className="flex justify-center mt-20 flex-col items-center">
  <h3 className="font-normal text-3xl">Don't start from scratch —</h3>
  <h3 className="font-normal text-3xl">dive right into Mirano.</h3>
</div>
{/* cards */}
<div className="w-5/6 m-auto ">
<div className="mt-20">
<Slider {...settings}>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 ">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Process Mapping</div>
  <img className="mt-7 w-full h- flex justify-center" src={process} alt="Process-Mapping-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-2">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Retrospectives</div>
  <img className="mt-7 w-full h-64 flex justify-center " src={Retros} alt="Retrospectives-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-4">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Mind Mapping</div>
  <img className="mt-7 w-full h-fit flex justify-center" src={mind} alt="Mind-Mapping-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-6">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Scaled Product Planning</div>
  <img className="mt-7 w-full h-fit flex justify-center" src={scaled} alt="Scaled-Product-Planning"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-7">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Whiteboarding</div>
  <img className="mt-7 w-full h-fit flex justify-center" src={White} alt="Whiteboarding-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-8">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Technical Diagramming</div>
  <img className="mt-10 w-full h-fit flex justify-center" src={technical} alt="Technical Diagramming-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-9">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Customer Journey Mapping</div>
  <img className="mt-16 w-full h-fit flex justify-center" src={customer} alt="Customer-Journey-Mapping-img"/>
   </div>
</div>
<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-10">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Wireframing</div>
  <img className="mt-9 w-full h-fit flex justify-center" src={wire} alt="Wireframing-img"/>
   </div>
</div>

<div className=" rounded-xl border border-black overflow-hidden  bg-white h-96 mx-11">
  <div className="text-center ">
    <div className="font-bold text-xl flex justify-center mt-8">Strategy & Planning</div>
  <img className="mt-7  w-full h-72 flex justify-center" src={startegy} alt="Strategy-&-Planning"/>
   </div>
</div>
</Slider>
</div>
</div>

<p className="flex justify-center mt-20 text-xl">Rated 4.8 out of 5,134+ G2 reviews</p>
<div className="mt-20">
<Marquee>
<div className="flex flex-nowrap gap-6">
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={accenture} alt="Accenture Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={asos} alt="Asos Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={bumble} alt="Bumble Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={conten} alt="conten-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={DocuSign} alt="DocuSign-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={hanes} alt="hanes-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={liberty} alt="liberty-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={pepsico} alt="pepsico-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-2xl flex items-center justify-center h-12 w-32">
  <img src={Total} alt="Total-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={Ubi} alt="Ubi-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={whirl} alt="Whirl-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={wp} alt="Wp-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32 mx-3">
  <img src={Yamaha} alt="Yamaha-logo" className="h-12 w-40" />
  </div> 
</div>
</Marquee>
</div>
<div className="flex justify-around mt-20">
  <h2>
    <p className="text-4xl mb-2 pl-8">Next big thing? No big deal.</p>
    <p className="text-4xl">Three simple keys to the future.</p>
  </h2>
</div>
<div className="flex justify-around items-center mt-32">
  <div className="flex flex-col justify-center max-w-1/2 mt-8 pr-56">
    <h1 className="text-4xl">Strategize & plan</h1>
    <p className="text-lg  w-72 mt-3 ">Ensure continuous alignment with customer needs and company strategy. Define goals and initiatives, visualize priorities and dependencies, and finally, watch your plans pay off. Everything is easier when you never run out of space.</p>
  </div>
  <div className="flex justify-end">
    <img src={diagraming} alt="Homepage-diagraming" className="h-1/2 max-h-96 max-w-1/2 pl-8" />
  </div>
</div>
<div className="flex justify-around items-center mt-32">
  <div className="flex flex-col justify-center max-w-1/2">
    <h1 className="text-4xl">Design customer-centric solutions</h1>
    <p className="text-xl w-72 mt-3 ">Foster a customer-centric mindset and build a mutual team space, where everyone can capture insights, structure them with diagrams and tables, and share it all in a central spot.</p>
  </div>
  <div className="flex justify-end">
    <img src={product} alt="Homepage product" className="h-auto max-h-96 max-w-1/2" />
  </div>
</div>
<div className="flex justify-around items-center mt-32">
  <div className="flex flex-col justify-center max-w-1/2">
    <h1 className="text-4xl">Develop your products & services</h1>
    <p className="text-xl w-72 mt-3">Accelerate time to market with a full suite of capabilities designed for innovation, including diagramming, real-time data visualization, and workshop facilitation. Miro also gives you built-in support for common product development processes, with agile practices like estimation and retrospectives.</p>
  </div>
  <div className="flex justify-end">
    <img src={planing} alt="Homepage-planing" className="h-auto max-h-96 max-w-1/2" />
  </div>
</div>

<div className=" container mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-20">
        <div className="md:me-400  h-100 flex justify-center flex-col md:items-start">
            <h2 className="text-3xl md:text-4xl mb-8"><span>Connect your entire company in a single, secure platform</span></h2>
            <p className="mb-8"><span>With enterprise-grade security at its core, Miro helps organizations approach a Zero Trust Security philosophy. We offer advanced security integrations, robust data residency, governance solutions for sensitive data, and an accessibility program targeting Level AA Success Criteria of WCAG 2.1.</span></p>
            <a role="button" tabindex="0" href="#" className="inline-flex items-center btn-lg btn-link end-icon btn hover:bg-slate-300">
                <span className="flex items-center justify-center ms-2 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-6 h-6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m10.59-7l7 7-7 7"/></svg></span>
                <span className="ms-2 ">Learn more</span>
            </a>
        </div>
        <div className="md:offset-lg-1 flex justify-center">
            <div data-testid="image" class="aspect-w-4 aspect-h-3">
                <img alt="Miro Enterprise Security" src="https://images.ctfassets.net/w6r2i5d8q73s/eZDT7EvJSgyYtH43Ujq1z/e43d27169fa6b58bf231c9019956e80b/Image1.png" class="object-cover" />
            </div>
        </div>
    </div>
</div>

<div className="flex justify-around items-center mt-32">
  <div className="flex flex-col justify-center">
    <h1 className="text-5xl">4 of 60 million reasons to try Mirano</h1>
    <p className="text-xl  mt-8 pl-20">Trusted across the world, by companies large and small.
</p>
<span className=" text-center pr-12 mt-3 hover:underline">Learn more</span>
  </div>
  </div>
  {/* Card Section */}

  <div className="container mx-auto px-10 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-white rounded-lg overflow-hidden flex">
  <div className="bg-yellow-400 w-4"></div>
  <div className="flex-grow">
    <img className="w-full" src="https://images.ctfassets.net/w6r2i5d8q73s/CE5Cs6SwbhSSbOTGcKBUm/4e7ddcfe59905bf3621c35b14a3b2630/ISO_logo_EN_small_1_1_x2.png?fm=webp&q=75" alt="" />
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">ISO</h5>
      </a>
      <p class="mb-3 font-normal text-black">ISO-27001 enterprise-grade security</p>
    </div>
  </div>
</div>
    <div className="bg-white  rounded-lg overflow-hidden flex">
    <div className="bg-yellow-400 w-4"></div>
    <div className="flex-grow">
      <img className="w-full" src="https://images.ctfassets.net/w6r2i5d8q73s/6aU6Qn5YHpvhGB5u9qUtys/419ad7a171d78a11a12d1b9e48f8851f/G2_logo_EN_small_1_1_x2.png?fm=webp&q=75" alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">#1</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Visual Collaboration Platform on G2</p>
      </div>
      </div>
    </div>

    <div className="bg-white  rounded-lg overflow-hidden flex">
    <div className="bg-yellow-400 w-4"></div>
    <div className="flex-grow">
      <img className="w-full" src="https://images.ctfassets.net/w6r2i5d8q73s/7qTTrdMCPoPr8u6uw6U4uS/f552208f20ae17bcc84f2bc25558c10c/Fortune100_logo_EN_small_1_1_x2.png?fm=webp&q=75" alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">99%</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">of the Fortune 100 are Miro customers</p>
      </div>
      </div>
    </div>

    <div className="bg-white  rounded-lg overflow-hidden flex">
    <div className="bg-yellow-400 w-4"></div>
    <div className="flex-grow">
      <img className="w-full" src="https://images.ctfassets.net/w6r2i5d8q73s/2eKADQTcu4FuJyLIp9h15O/dd31f6e68eeeb95af89a862513edd296/Earth_illustration_EN_small_1_1_x2.png?fm=webp&q=75" alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">60M+</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">users around the world use Miro</p>
      </div>
      </div>
    </div>
  </div>
</div>

<div className="container mt-44">
<div class="relative bg-opacity-35">
  <img src="https://images.ctfassets.net/w6r2i5d8q73s/2W99ToXqgqMH3xGyEAypTu/b96b18098d897a5ec6d51d979d7f5132/social_proof_cover_photo_EN_jumbo_16_9_2x.png?fm=webp&q=65" alt="" className="w-full opacity-25" />
  <div class="absolute top-56  z-10 w-1/2 ">
  <h2 class="ml-24 pb-8 text-5xl  text-white ">
  Helping the world’s most innovative companies 
    collaborate better, daily
  </h2>
  <p className="ml-24 text-white">More than 180,000 organizations, including Nike, Ikea, Deloitte, WPP, and Cisco, have adopted Miro to help innovate the way they innovate, with the goal of improving the speed and quality of their work.</p>
  <button className="bg-white hover:bg-black hover:text-white ml-24 mt-10 h-12 w-56 rounded-2xl border border-black">See all Cutomer Stories</button>
</div>
</div>

</div>

<div className="mt-44">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-20">
        <div className="md:me-400  h-100 flex justify-center flex-col md:items-start">
            <h2 className="text-3xl md:text-4xl mb-8"><span>Integrated with your favorite tools? Of course.</span></h2>
            <p className="mb-8"><span>To make work more efficient, Miro connects dynamically with over 130 tools across your stack. Jira, Azure DevOps, Asana, Zoom, Teams, and Slack are just some of them.</span></p>
            <a role="button" tabindex="0" href="#" className="inline-flex items-center btn-lg btn-link end-icon btn hover:bg-slate-300">
                <span className="flex items-center justify-center ms-2 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-6 h-6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m10.59-7l7 7-7 7"/></svg></span>
                <span className="ms-2 ">Learn more</span>
            </a>
        </div>
        <div className="md:offset-lg-1 flex justify-center">
            <div data-testid="image" class="aspect-w-4 aspect-h-3">
            <img src={integration} alt=""className="object-cover" />
            </div>
        </div>
    </div>
</div>

<div className="mt-44">
<div className="flex justify-around mt-20">
  <h2>
    <p className="text-4xl mb-2 pl-2">Explore what others like you have created</p>
    <p className="text-4xl pl-44">within Miroverse</p>
    <p className="mt-8">Discover the proven workflows, projects, and frameworks of the Miro community — or share your own!</p> 
  </h2>
 </div>
<div className="text-2xl flex justify-center text-center">
<button className="bg-white hover:bg-black hover:text-white mr-28 mt-10 h-12 w-56 rounded-2xl border border-black">Explore Miroverse</button>
</div>
</div>
<div className="mt-44 flex justify-center">
<img src="https://images.ctfassets.net/w6r2i5d8q73s/4moohLpu7T6QwBHDSov7AE/af3324a8ca01ca682c62c40aaa56cd1e/miroverse_HP_illustration_EN_big_4_3_x2.svg" alt="" className='w-1/2' />
</div>
{/* footer */}
<div className="bg-black mt-96">
<div className="flex justify-around ">
<h2>
<p className="text-6xl mb-2 text-center text-white mt-24"> our 60M+ users today Join</p>
<p className="text-xl pl-4 text-white mt-4">Join thousands of teams collaborating and doing their best work on Miro.</p>
</h2>
</div>
<div className="flex justify-center mt-12">
  <input type="text" placeholder="Enter your work email" className="border h-10 rounded-lg text-center hover:border-blue-500 mx-2 w-64" />
  <button className="bg-blue-500 text-white w-36 rounded-lg hover:bg-blue-700"> Sign up for free</button>
</div>
<div className="mt-12">
<Marquee>
<div className="flex flex-nowrap gap-6 bg-slate-400">
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={accenture} alt="Accenture Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={asos} alt="Asos Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
    <img src={bumble} alt="Bumble Logo" className="h-12 w-32 object-contain" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={conten} alt="conten-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={DocuSign} alt="DocuSign-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={hanes} alt="hanes-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={liberty} alt="liberty-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={pepsico} alt="pepsico-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-2xl flex items-center justify-center h-12 w-32">
  <img src={Total} alt="Total-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={Ubi} alt="Ubi-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={whirl} alt="Whirl-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32">
  <img src={wp} alt="Wp-logo" className="h-12 w-40" />
  </div>
  <div className="bg-transparent rounded-xl flex items-center justify-center h-12 w-32 mx-3">
  <img src={Yamaha} alt="Yamaha-logo" className="h-12 w-40" />
  </div> 
</div>
</Marquee>
</div>
<div class="mt-32 flex justify-center ml-8 gap-24">
  <div class="flex flex-col ">
    <h2 class="text-5xl text-white">Product</h2>
    
    <ul class="text-white">
      <li class="text-xl mt-7 hover:underline">Online whiteboard</li>
      <li class="text-xl mt-6 hover:underline">Apps & Integrations</li>
      <li class="text-xl mt-6 hover:underline">Templates</li>
      <li class="text-xl mt-6 hover:underline">Miroverse</li>
      <li class="text-xl mt-6 hover:underline">Miro Developer Platform</li>
      <li class="text-xl mt-6 hover:underline">Miro for Devices</li>
      <li class="text-xl mt-6 hover:underline">Enterprise Guard</li>
      <li class="text-xl mt-6 hover:underline">Accessibility</li>
      <li class="text-xl mt-6 hover:underline">Changelog</li>
    </ul>
  </div>
<div className="">
  <h2 class="text-5xl text-white">Solutions</h2>
  <ul class="text-white">
      
      <li class="text-xl mt-7 hover:underline">Brainstorming & Ideation</li>
      <li class="text-xl mt-6 hover:underline">Meetings and Workshops</li>
      <li class="text-xl mt-6 hover:underline">Agile Workflows</li>
      <li class="text-xl mt-6 hover:underline">Diagramming</li>
      <li class="text-xl mt-6 hover:underline">Research & Design</li>
      <li class="text-xl mt-6 hover:underline">Strategy & Planning</li>
      <li class="text-xl mt-6 hover:underline">Mind Map</li>
      <li class="text-xl mt-6 hover:underline">Concept Map</li>
      <li class="text-xl mt-6 hover:underline">Flowchart Maker</li>
      <li class="text-xl mt-6 hover:underline">Wireframe</li>

    </ul>
  </div>
  <div className="">
  <h2 class="text-5xl text-white">Resources</h2>
  <ul class="text-white">
      <li class="text-xl mt-7 hover:underline">Mirano Academy</li>
      <li class="text-xl mt-6 hover:underline">Help Center</li>
      <li class="text-xl mt-6 hover:underline">Blog</li>
      <li class="text-xl mt-6 hover:underline">Status</li>
      <li class="text-xl mt-6 hover:underline">Mirano Community</li>
      <li class="text-xl mt-6 hover:underline">Mirano Experts Directory</li>
      <li class="text-xl mt-6 hover:underline">Mirano Events</li>
    </ul>
  </div>
  <div className="">
  <h2 class="text-5xl text-white">Company</h2>
  <ul class="text-white">
  <li class="text-xl mt-7 hover:underline">About us</li>
     <li class="text-xl mt-6 hover:underline">careers</li>
      <li class="text-xl mt-6 hover:underline">Mirano In the News</li>
      <li class="text-xl mt-6 hover:underline">Customer Stories</li>
      </ul>
  </div>
  <div className="">
  <h2 class="text-5xl text-white">Plans and Pricing</h2>
  <ul class="text-white">
  <li class="text-xl mt-7 hover:underline">Pricing</li>
      <li class="text-xl mt-6 hover:underline">Business</li>
      <li class="text-xl mt-6 hover:underline">Enterprise</li>
      <li class="text-xl mt-6 hover:underline">Consultants</li>
      <li class="text-xl mt-6 hover:underline">Education</li>
      <li class="text-xl mt-6 hover:underline">Startups</li>
      <li class="text-xl mt-6 hover:underline">NPOs</li>
      <li class="text-xl mt-6 hover:underline">Contact sales</li>
       </ul>
  </div>
</div>

<div className="class">
<span class="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24">
       <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
</div>
<div className="flex justify-start ml-6 mt-16 gap-9">
  <img src={fb} alt="" className='w-10 h-10'/>
  <img src={linkedin} alt="" className='w-10 h-10' />
  <img src={yt} alt="" className='w-10 h-10' />
  <img src={twitter} alt="" className='w-10 h-10' />
  <img src={instagram} alt="" className='w-10 h-10'/>
</div>
<div className="text-white flex justify-start gap-9 ml-6 mt-16 pb-16">
  <p className="hover:underline">Miro © 2024</p>
  <p className="hover:underline">Terms of Service</p>
  <p className="hover:underline">Privacy Policy</p>
  <p className="hover:underline">Manage Cookies</p>
</div>


</div> 
</div>
  )
}

export default Home
