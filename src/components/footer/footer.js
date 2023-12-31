import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

import Chatboat from "../chatbot";
function Footer() {
  const router = useRouter();

  const UploadDocumentPage = () => {
    // Use router.push to navigate to the next page
    router.push("/upload-order");
  };


  const [isChatModalOpen, setChatModalOpen] = useState(false); // State to control modal visibility





  return (
    <>
      <div className="bg-[#1E4755]">
        {/* <div className="mx-auto w-7xl flex  py-32 px-2  lg:px-32 sm:px-6 sm:py-32 grid-cols-2 justify-between"> */}
        <div className="relative isolate overflow-hidden  xl:py-16 sm:py-24 lg:py-32 max-sm:px-8">
          <div className="mx-auto w-7xl max-sm:px-2 px-6 lg:px-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
              <div className="py-12">
               <Link href={"/"}>
               <Image
                  src="/assets/ozfooterlogo.png"
                  width={160}
                  height={20}
                  alt="footerlogo"
                />
               </Link>
                {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl pt-8 pb-0">Special Offers 
                </h2>
              <p className='text-gray-300 mt-1'>Subscribe to avail our special offers</p>
                <input type='text' placeholder='Email Address' className='px-4 rounded-xl py-3 mt-12' />
                */}
              </div>
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-xl">
                  Get To Know Us{" "}
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                
                    {" "}
                    How It Works
                 
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                 
                    {" "}
                    Reviews
                
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                 
                    {" "}
                    Experts
                 
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                 
                    {" "}
                    Contact Us
                 
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                 
                    {" "}
                    Blog
                 
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                
                    {" "}
                    Jobs
                
                </Link>
                </p>

                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                
                    {" "}
                    Get $2000
                 
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                  
                    {" "}
                    Resume
                
                </Link>
                </p>
                <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                 
                    {" "}
                    Legit Essay
                 
                </Link>
                </p>
                <p className="mt-1 text-base font-bold leading-8 text-orange-600">
                <Link href={"/"}>
                
                    {" "}
                    Our Offers
                
                </Link>
                </p>
              </div>
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-xl font-bold tracking-tight text-white lg:text-xl">
                  Let Us Help You{" "}
                </h2>

                {/* <Link href={"/"}>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    {" "}
                    Login
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Sign Up
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Faqs
                  </p>
                </Link> */}
  <p className="mt-1 text-base leading-8 text-gray-300">
                <Link href={"/"}>
                
                    {" "}
                    Resources
                 
                </Link>
                </p>
                {/* <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Premium
                  </p>
                </Link> */}

                
                <Link href="https://www.ozassignments.com/terms-conditions/" 
                target="_blank">
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Term Of Use
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Fair Use Policy
                  </p>
                </Link>
                <Link href={"https://www.ozassignments.com/privacy-policy/"} target="_blank">
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Privacy Policy
                  </p>
                </Link>
                <Link href={"https://www.ozassignments.com/refund-policy/"} target="_blank">
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Revision & Refund Policy
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Prices
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    News
                  </p>
                </Link>
              </div>
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-xl font-bold tracking-tight text-white lg:text-xl">
                  Best In Countries{" "}
                </h2>

                <Link href={"/"}>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    {" "}
                    Americas{" "}
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Asia Pacific{" "}
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    Europe{" "}
                  </p>
                </Link>
                <Link href={"/"}>
                  <p className="mt-1 text-base leading-8 text-gray-300">
                    {" "}
                    Middle East/Africa{" "}
                  </p>
                </Link>
              </div>
              <div className="max-w-xl lg:max-w-lg">
                <div
                  className="text-center items-center p-4 bg-gray-500"
                  style={{ backgroundColor: "#434343" }}
                >
                  <p className="mb-4 text-xl leading-8 text-gray-300">
                    <em>
                      <strong>
                        Upload your requirements and <br /> see your grades
                        improving.
                      </strong>
                    </em>
                  </p>
                  <p className="text-base leading-8 text-gray-300">
                    <i>1,000,000+ satisfied students.</i>
                  </p>
                  <p className="text-base leading-8 text-gray-300">
                    Rated <span className="text-orange-600">4.9/5</span>
                  </p>
                  <p className="text-base leading-8 text-gray-300">
                    <i> based on overall</i>
                  </p>
                  <p className="text-base leading-8 text-gray-300">
                    <span className="text-orange-600">38,983 </span>reviews.
                  </p>
                  <div className="mt-6 ">
                    <Link href={"/upload-order"}>
                      <button
                        type="submit"
                        className=" items-center text-center rounded-md bg-orange-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                        onClick={UploadDocumentPage}
                      >
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-16" />
            <div className="grid grid-cols-2 justify-between py-8 pt-12">
              <div className="">
                <div className="text-center items-center text-orange-700 font-bold ">
                  <Link href={"/"} className="hover:text-gray-400 px-2">
                    Refund Policy
                  </Link>
                  <span className="text-gray-500 ">|</span>
                  <Link href={"/"} className="hover:text-gray-400 px-2">
                    Cancellation Policy
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link href={"/"} className="hover:text-gray-400 px-2">
                    Terms & Conditions
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link href={"/"} className="hover:text-gray-400 px-2">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link href={"/"} className="hover:text-gray-400 px-2">
                    FAQ
                  </Link>
                </div>
               
              </div>
              <div className="flex justify-evenly xl:px-64 lg:px-64 ">
                <Link
                  href={"https://www.facebook.com/OzAssignmentHelp/"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 text-gray-500"
                  />
                </Link>
                <Link
                  href={
                    "https://workspace.google.com/blog/product-announcements/what-you-need-to-know-about-the-sunset-of-consumer-google-plus-on-april-second"
                  }
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="w-6 h-6 text-gray-500"
                  />
                </Link>
                <Link href={"https://twitter.com/"} target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-6 h-6 text-gray-500"
                  />
                </Link>
                <Link
                  href={"https://www.pinterest.com/OZassignment/"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="w-6 h-6 text-gray-500"
                  />
                </Link>
              </div>
            </div>
            <div>
            <h1 className="text-gray-300 xl:text-left lg:text-left xs:text-center ">
                  © 2012-23 OZ Assignments All rights reserved.
                </h1>
            </div>

            <div className=" text-center items-center mx-auto grid w-7xl pt-8  lg:max-w-none lg:grid-cols-3   justify-between">
              <div>
                <Image
                  src="/assets/visacard.png"
                  alt="visacard"
                  width={250}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/assets/dmca.png"
                  alt="visacard"
                  width={250}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src="/assets/copyscape.png"
                  alt="visacard"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
        <Chatboat isOpen={isChatModalOpen} closeModal={() => setChatModalOpen(false)}  />  
      </div>

    

    </>
  );
}

export default Footer;
