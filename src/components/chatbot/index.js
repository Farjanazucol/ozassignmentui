import Image from "next/image";
import React, {  useState } from "react";

import Style from "./chatboat.module.css";
import Link from "next/link";


function Chatboat() {

 

  return (
    <>
      {/* // Chatboat Butoon Hover */}


      <div className={Style.chatButtonContainer}>
      <div></div>
      <Link
       href={"/"}
       onClick={openChatWindow}
        
        className={Style.chatButton}
      >
        <div className={Style.moveOut}>
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
        </div>
        
      </Link>
    </div>
           
          </>
     
    
  );
}
export default Chatboat;



function openChatWindow() {
  // Specify width and height smaller than the screen size
  const width = 400;
  const height = 600;

  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const options = `toolbar=no,status=no,width=${width},height=${height},left=${left},top=${top}`;

  // Open the chat window with specified options
  window.open(
    'https://chatserver.comm100.com/chatwindow.aspx?siteId=227686&planId=c3000000-0000-0000-0000-008e00037966',
    'ChatWindow',
    options
  );
}