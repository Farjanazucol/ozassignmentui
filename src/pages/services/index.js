import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../components/constants'
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Head from 'next/head';







function Services() {
  const router = useRouter();
   //fetch data from API
   const [servicesData, setServicesData] = useState([]);

 
   useEffect(()=>{
     
   
     async function fetchData() {
       try {
         const response = await fetch(`${CONSTANTS.NGROK_URL}oz/api/services`);
         
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
     
         const contentType = response.headers.get("content-type");
         if (contentType && contentType.includes("application/json")) {
           const data = await response.json();
           console.error("ServicesData>>>>>>>>>>", data[0]);
           setServicesData(data);
          
         } else {
           console.error("Response was not JSON.");
           // Handle non-JSON responses as needed.
         }
       } catch (error) {
         console.error("Error fetching or parsing data:", error.message);
         // Handle the error gracefully, e.g., display an error message to the user
       }
     }
     
     fetchData()
   },[])

   //ACtive Link
   
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Set the active link when the component mounts based on the current route
    setActiveLink(router.pathname);

    // Add an event listener to update the active link when routes change
    const handleRouteChange = (url) => {
      setActiveLink(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // Remove the event listener when the component unmounts
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.pathname]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    router.push(href);
  };
   //End Active Link
  return (
  <>
  <Head>
        <title> OZAssignment Help</title>
        <meta charset="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
    </Head>
  

<div className="group inline-block">
<div
 className={`py-2 text-lg font-normal leading-6  outline-none focus:outline-none  px-3  bg-white rounded-sm flex items-center  font-normal${
  activeLink === '/services' ? 'text-[#1E4755] hover:border-b-2 hover:border-orange-600 pb-1' : 'text-[#1E4755]'
}`}
// onClick={() => handleLinkClick('/services')}
//   href={"/"}
 
  aria-current="page"
>
  <span className="pr-1 font-normal flex-1 text-[#1E4755]">Services</span>
  <span className="font-normal">
    <BiChevronDown className='w-6 h-6 text-[#1E4755]' />
  </span>
</div>
<ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-80 z-50 text-sm   ">
  {servicesData.map((object, i) => (
    <li key={i.id} className="rounded-sm py-1 px-3 hover:bg-gray-100">
      <button className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
        <span className="pr-1 flex-1 ">{object.title}</span>
        <BiChevronDown className='w-6 h-6 text-[#1E4755] hover:text-orange-500' />
      </button>
      <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-80 z-50">
        {object.children.map((child) => (
          <li key={child.id} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
              {/* <span className="pr-1 flex-1">{child.title}</span> */}
              <Link href={'services/' + child.slug + "/"}  key={i}  className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
                    <span className="pr-1 flex-1">{child.title}</span>
                   
                  </Link>
              <BiChevronDown className='w-6 h-6 text-[#1E4755] hover:text-orange-500' />
            </button>
            <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-80 z-50">
             
              {child.children.map((grandchild, i) => (
                <li key={grandchild.id} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <Link href={'services/' + grandchild.slug + "/"}  key={i}  className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
                    <span className="pr-1 flex-1">{grandchild.title}</span>
                   
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul>
</div>
  
</>

  )
}

export default Services
