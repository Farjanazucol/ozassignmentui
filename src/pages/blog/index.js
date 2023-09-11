import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../components/constants'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export async function getServerSideProps() {
  const res = await fetch(`${CONSTANTS.NGROK_URL}oz/api/blogs`)
  console.log(res)
  const data = await res.json()
  // console.log(data.results)

  console.log("BlogData***********", data);
 
  return  {
    props:{data}
  }
}

function Blogs({data}) {

 

  return (
    <>

<Head>
        <title> OZAssignment - Blogs</title>
        <meta charset="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
    </Head>
  

    <div className="bg-white " >
      <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between sm:grid-cols-1 " style={{

        backgroundImage: `url('/assets/blogimagebackg.jpg')`,

        width: '100%', // Set width to 100%
        height: '100%',



        opacity: '0.8',
        margin: '0 auto',
        backgroundSize: 'cover',

        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top center', // Center the background image
      }}>
        <h1 className='text-center text-4xl font-bold leading-[3rem] text-white' >All Blog Articles</h1>
      </div>
      <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between sm:grid-cols-1 ">
        {/* <div className="container mx-auto"> */}
          <div className="flex flex-wrap -mx-4">


            <div className="w-full sm:w-1/2 md:w-1/4  xl:1/4 p-1 pt-10 ">
              <div className=' border-2 '>
                <div className='flex px-3 py-4 space-x-4 space-y-8'>
                  <div> <Image src="/assets/competetive.jpg" alt='coperative' width={150} height={80} />
                  </div>
                  <div>
                    <Link href={"#"}>HI6006 Competitiv...</Link>
                    <p>Introduction The assessment here discusses a...</p>
                  </div>
                </div>
                <div className='flex px-3 py-4 space-x-8'>
                  <div> <Image src="/assets/economic.jpg" alt='competetive' width={150} height={80} />
                  </div>
                  <div className='pt-2'>
                    <Link href={"#"}>
                      Risk of Economic ...</Link>
                    <p>Economic crisis 1. Country experience downtu..</p>
                  </div>
                </div>
                <div className='flex px-3 py-4 space-x-8'>
                  <div> <Image src="/assets/coperative.jpg" alt='coperative' width={150} height={80} />
                  </div>
                  <div >
                    <Link href={"#"}>
                      Cooperative Learn...</Link>
                    <p>Why do states cooperate? States cooperates...</p>
                  </div>
                </div>
                <div className='flex px-3 py-4 space-x-8'>
                  <div>
                    <Image src="/assets/law.jpg" alt='law' width={100} height={80} />
                  </div>
                  <div className='pt-6'>
                    <Link href={"#"}>Applicable Law Go...</Link>
                    <p>Solution  The Issues raised 1. Wh.</p>
                  </div>
                </div>
              </div>



            </div>
            <div className="w-full sm:w-1/2 md:w-9/12  xl:w-9/12 p-4 pr-2 pt-10">  
             <div>
              {data.results.map((object , i ) => (
                <div className='border-2 mb-4 px-4 py-4 sm:h-50 lg:h-40 xl:h-40' key={i}>
                 <div className='flex' >
                 <Link href={'blog/' + object.slug + "/"} className='text-[#333333] text-lg cursor-pointer'>{object.title} <span className=' w-1/5  h-0.5 pt-0 bg-orange-600 inline-block hover:bg-sky-800 hover:w-[40%] right-0'>
                    
                    </span>
                    </Link>
                  </div>
                  <p className='text-normal text-gray-500 md: py-0 lg:py-8 xl:py-4 md:w-[100%] lg:w-[65%] xl:w-[100%]'>{object.seo_description}</p>

                </div>
              ))}
            </div>

            <div className='text-center mt-16 '>
         <button className='  items-center text-center rounded-md bg-orange-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500' onClick={"loadMore"}>Load More...</button>
         </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
    </>
  )
}

export default Blogs






