import React from "react";


import Link from "next/link";
import Image from "next/image";

function Thankyou() {
 
  
  return (
    
        <div className="bg-white">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative items-center  rounded-lg  text-center sm:my-8 sm:w-full sm:max-w-md">
            <Image
                className=""
                src="/assets/congrate.png"
                alt="about"
                width={80}
                height={80}
              />
                <div>
                  <h1 className="text-5xl text-center text-orange-600 py-4">
                    Congratulations
                  </h1>
                </div>
              <div className="bg-[#150e0e8f] px-2 pb-4 pt-5 sm:p-6  sm:pb-4">
              
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2 text-center">
                      <p className="text-md text-white">
                        {" "}
                        You have successfully uploaded your assignment.
                      </p>
                      <p className="text-md text-white py-2">
                        We are currently reviewing your assignment details.
                        Click here to chat with one of our operators regarding
                        it. We have also sent you details of your account on the
                        email provided.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#150e0e8f] justify-between px-4 py-3 sm:flex  sm:px-6">
                <Link
                  href="https://chatserver.comm100.com/chatWindow.aspx?siteId=227686&planId=195# 
"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                  >
                    Chat with Us
                  </button>
                </Link>
                <Link
                  href="https://www.ozassignments.com/en/accounts/login/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                    
                  >
                    Go To Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
     
  );
}

export default Thankyou;
