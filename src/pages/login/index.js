import Link from 'next/link';
import React, { useState } from 'react'

function Login() {



 
  return (
    <div style={{

      backgroundImage: `url('/assets/website-signup-background.jpg')`,

      width: '100%', // Set width to 100%
      height: '100%',



      
      margin: '0 auto',
      backgroundSize: 'cover',

      // backgroundAttachment: 'relative',
      backgroundRepeat: 'repeat-y',
      backgroundPosition: 'top center', // Center the background image
    }}>
    



    <div className=" px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between" >
    <div className="flex flex-wrap  -mx-4"></div>
    <div className="  text-center  ">
     
    
    
   
   
  

   <form action="#" method="POST" className="mx-auto rounded-lg  bg-white pt-8 max-w-xl sm:mt-8 lg:mt-8 ">
   <p className="mt-1 text-2xl font-bold  leading-8 "  style={{color:"#1E4755"}}>Sign In</p>
   <div className="mt-8 px-24">
            <input type="text" placeholder='E-mail' name="email" id="email" autoComplete="given-email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
          </div>
         
          <div className="mt-8 px-24 mb-12">
            <input type="password" placeholder='Enter Password' name="Password" id="name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
          </div>
       
         
         
        
      
  <hr/>
      <div className=" sm:mt-0 mb-3 items-center text-center">
        <button type="submit" className="  rounded-md  bg-orange-500 sm:px-10 px-2 py-2 mt-4 sm:py-2 md:px-20 xl:px-30 xl:py-3  text-center text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Login</button>
      </div>
      <hr/>
      <div className=" sm:mt-12 items-center text-center bg-slate-400 rounded-b-xl ">
       <Link href={"/signup"}>
       <button type="submit" className="    text-[#1E4755] sm:px-10 px-2 py-2 mt-0 sm:py-2  xl:py-3  text-center text-lg font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Create Account</button>
       </Link>
      </div>
    </form>
     </div>
     </div>
    </div>
  )
}

export default Login
