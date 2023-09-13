import Image from "next/image";
import React, {  useState } from "react";

import Style from "./chatboat.module.css";
import Link from "next/link";

import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'





function Chatboat() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

  return (
    <>
      {/* // Chatboat Butoon Hover */}

    

    <div className="fixed top-16 right-20 px-60">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                `}
            >
              <div className={Style.chatButtonContainer}>
        <div className={Style.moveOut}>
          <button
            className={Style.chatButton}
            data-modal-target="authentication-modal"
            data-hs-overlay="#hs-slide-up-animation-modal"
            data-modal-toggle="authentication-modal"
            onClick={isOpen}
          >
            <svg
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              focusable="false"
              aria-hidden="true"
              className={Style.outIcon}
            >
              <svg
                x="0px"
                y="0px"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                focusable="false"
                aria-hidden="true"
                className={Style.outIcon}
              >
                <g>
                  <defs>
                    <linearGradient id="linear">
                      <stop offset="0%" stopColor="#3BAFD9"></stop>
                      <stop offset="100%" stopColor="rgb(33,149,192)"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="#fff"
                    d="M16.007 0c-8.299 0-14.023 6.836-14.023 14.024 0 5.88 2.982 8.636 4.107 9.916 0 0 4.093 4.585 12.068 8.060v-4.121c4.783-0.563 11.858-5.289 11.858-13.855-0.001-8.271-6.794-14.024-14.010-14.024z"
                    className={Style.chatButton}
                  ></path>
                  <path
                    fill="url(#linear)"
                    d="M18.035 22.372v3.657c-0.014 0-2.729-1.364-4.276-2.574-2.926-2.236-6.498-4.416-6.498-9.438 0-4.993 4.149-8.622 8.622-8.622 0.005 0 0.011-0 0.017-0 4.744 0 8.591 3.838 8.605 8.579v0.043c0 5.162-4.164 7.779-6.47 8.355z"
                    className={Style.innerIcon}
                  ></path>
                </g>
              </svg>
            </svg>
            <div className={Style.innerDotContainer}></div>
          </button>
        </div>
      </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-[17rem] w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl xl:min-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                 
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only" onClick={closeModal}>Close modal</span>
            </button>


            <div class="px-6 py-6 lg:px-8">
              
               <div className="relative  bg-white p-7 ">
               <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Our Team</h3>
               <hr/>
                  </div>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-base text-gray-900 dark:text-white"><span className="text-red-600">*</span> Name</label>
                        <input type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    {/* <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div> */}
                    <button type="submit" className=" block text-white justfy-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Chatting</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
 

     
    </>
  );
}
export default Chatboat;
