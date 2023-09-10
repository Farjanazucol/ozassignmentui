'use client'

import React, { useEffect, useState } from 'react'
 import Form from '../../components/common/uploadform'
import Style from './reviews.module.css'
import CONSTANTS from '../../components/constants'
import Head from 'next/head'


function Reviews() {


  // fetch data from API
  const [reviewsData, setReviewsData] = useState([]);



  //1)function

// useEffect(()=>{
  

//   async function fetchData() {
//     try {
//       const response = await fetch(`${CONSTANTS.NGROK_URL}oz/api/all-reviews`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const contentType = response.headers.get("content-type");
//       if (contentType && contentType.includes("application/json")) {
//         const data = await response.json();
//         console.error("data********", data);
//         setReviewsData(data.results);


       


//       } else {
//         console.error("Response was not JSON.");
//         // Handle non-JSON responses as needed.
//       }
//     } catch (error) {
//       console.error("Error fetching or parsing data:", error.message);
//       // Handle the error gracefully, e.g., display an error message to the user
//     }
//   }
  
//   fetchData()
// },[])





//3)used rd function
//******************************** */

const [page, setPage] = useState(1); // Initialize page state with 1
const [nextPageUrl, setNextPageUrl] = useState(
  `${CONSTANTS.NGROK_URL}oz/api/all-reviews?page=1`
);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch(nextPageUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        setReviewsData((prevData) => [...prevData, ...data.results]);

        // Update nextPageUrl based on the page state
        setNextPageUrl(`${CONSTANTS.NGROK_URL}oz/api/all-reviews?page=${page + 1}`);
      } else {
        console.error("Response was not JSON.");
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error.message);
    }
  }

  fetchData();
}, [nextPageUrl, page]); // useEffect depends on nextPageUrl

const loadMore = () => {
  // Increment the page state when "Load More" is clicked
  setPage(page + 1);
};



  return (
    <>

<Head>
        <title> OZAssignment - Reviews</title>
        <meta charset="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
    </Head>
      <div className=" bg-[#E6E7FD]">
        <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between">
        {/* <div className="container mx-auto"> */}
            <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 xs:w-full  md:w-1/2  xl:w-2/3 p-4 ">
          <div>
           
            <h1 className=' font-extrabold text-4xl leading-[3rem] text-[#1E4755]' >MyAssignmentHelp  <span >  Review</span><br/></h1>
            <div className="flex ">
            <p className='text-base leading-8  md:w-[100%] sm:w-[100%] pt-9 font-medium' style={{ color: "#1E4755" }} >Still in Two Minds? The Proof is in Numbers !
38983 genuine reviews with a rating of 4.9/5.
            </p>
           
               
                </div>
            <div className={Style.iconContainer}>
              <div className={Style.ordrSlider}>
                <div className={Style.sliderItem}>
                  <div className={Style.Col}>
                    <div className={Style.Col_Gr}>
                      <div className={Style.Poly}></div>
                      <div className={Style.Info}>
                        <span><b>38983</b></span>
                        <span>Genuine Reviews</span>
                      </div>
                    </div></div>
                </div>
                <div className={Style.sliderItem}>
                  <div className={Style.Col}>
                    <div className={Style.Col_Or}>
                      <span className={Style.Poly}></span>
                      <div className={Style.Info}>
                        <span><b>4.9/5</b></span>
                        <span>Overall Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4  ">
          {/* Form Design */}

          <Form />
          {/* End Form Design */}
</div>
        </div>
        {/* </div> */}
        </div>
      </div>

      <div className="bg-white ">
        <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-3 justify-between sm:grid-cols-1 ">
          {/* <div className="container mx-auto"> */}
            <div className="flex flex-wrap -mx-4">
           {reviewsData.map(item=>(

<div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" key={item}>
                <div  className="c-card block bg-white   overflow-hidden  shadow-[0px_0px_40px_0px_rgba(0,0,0,0.16)]">


                  <div className="p-4">

                    <div className=" flex items-center text-sm text-gray-600" key={item}>

                   

{[1, 2, 3, 4, 5].map((starIndex) => (
  
                                <svg
                                    key={starIndex}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke={starIndex <= item.stars ? 'orange' : 'gray'}
                                    className="w-5 h-4 p-0"
                                > 
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                               
                            ))}

<p className='text-right items-end flex-1'>{formatDate(item.created_at)}</p>
                     
 
                      </div>
                     
                    <p className="mt-2  font-bold">Management</p>
                    <p className='text-sm'>Essay: 2 Pages, Deadline: 5 days</p>
                    <p className="text-sm  py-4">{item.comment}</p>
                   
                    <p><i className='fa faFlag'></i>
User ID:
<span className='text-sm'>{item.name}</span></p>
                  </div>
                 
               
                </div>
                <div className="w-0 h-0 absolute 
  xl:border-b-[20px] xl:border-t-transparent
  xl:border-l-[25px] xl:border-l-white
  xl:border-t-[-10px] xl:border-b-transparent
  
  lg:border-b-[20px] lg:border-t-transparent
  lg:border-l-[25px] lg:border-l-white
  lg:border-t-[-10px] lg:border-b-transparent
  
  sm:border-b-[20px] sm:border-t-transparent
  sm:border-l-[25px] sm:border-l-white
  sm:border-t-[-10px] sm:border-b-transparent


  md:border-b-[20px] md:border-t-white
  md:border-l-[25px] md:border-l-white
  md:border-t-[-10px] md:border-b-white
  "></div>
               
              </div>
           ))}
             
             <button onClick={loadMore}>Load More</button>
            </div>
           
          {/* </div> */}

        </div>
      </div>
    </>
  )
}

export default Reviews



// Function to convert a timestamp into a formatted date string
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleString(undefined, options);
  }







