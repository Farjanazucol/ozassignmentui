import React from 'react'

import Form from '@/components/common/uploadform'
import Image from 'next/image'
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="bg-white">
    <div className="mx-auto w-7xl flex  pt-16 px-2 lg:py-16 sm:py-16 lg:px-32 sm:px-6 sm:pt-16 grid-cols-2 justify-between">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-60 -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:1/2  xl:1/2 p-4 pt-10">
      <div>
     
       
       <Image   src="/assets/404 .jpg" alt='pagenotfound' width={600} height={80} />
       <h1 className=' font-extrabold sm:text-xl md:text-xl lg:text-xl xl:text-xl leading-[3rem] pt-8 text-[#373737]'>The Page You Are Looking For Does Not Exist!

</h1>
<p className="text-md  py-4 text-[#5F5F5F]">But while you are here, how about signing up for assignment help?</p>

      </div>
     <div className="py-4 xl:pl-[12rem] md:pl-[8]">
     <Link
              href={"/"}
              className=" text-lg font-[600]  leading-6 text-[#3B5999] underline underline-offset-1"
            >
             Back To Home
            </Link>
     </div>
      </div>
      <div className="w-full sm:w-1/3 md:w-1/3  xl:1/3 pt-10">
     
     
      {/* Form Design */}

    <Form/>
        
      {/* End Form Design */}
</div>
    </div>
    </div>
    </div>
  </div>

  )
}

export default PageNotFound
