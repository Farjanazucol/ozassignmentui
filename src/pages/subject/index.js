import Head from 'next/head'
import React from 'react'

function Subject() {
  return (

    <>
    <Head>
        <title> OZAssignment - Subject</title>
        <meta charset="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
    </Head>
  

   
    <div className="bg-white " >
    <div className="   px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between" style={{backgroundColor:"#E6E7FD"}}>
        <h1 className='text-center text-3xl'>Subject Page</h1>
      
    </div>
    </div>
    </>
  )
}

export default Subject
