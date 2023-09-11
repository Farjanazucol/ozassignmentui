import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import Image from 'next/image'
export default function Layout({children}) {
    return (
   
  <>
 
  <Navbar/>
 <main>{children} </main>
  <Footer/>

  <div>
<Link href="https://api.whatsapp.com/send?phone=+91 9999999999&amp;text=Hi%2C" rel="noreferrer" className="mob_whatsapp w leftWhatsApp" id="leftWhatsApp" target="_blank">
<Image src="/assets/whatsapp--icon.svg" className="loading  fixed top-0  bottom-16 mt-custom -px-2 -left-24 " width="50" height="50" alt="icon" data-was-processed="true" style={{marginTop:"30rem", marginLeft:"-3px"}} />
</Link>
</div>





{/* <div className=" z-50">
        <div></div>
        <a
          href="https://chatserver.comm100.com/chatwindow.aspx?siteId=227686&amp;planId=c3000000-0000-0000-0000-008e00037966"
          aria-label="Chat button, agent online"
          role="button"
          aria-expanded="false"
          class="chatButton--ripple chatButton"
        >
          <div className="svg-container moveOut">
            <svg
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              focusable="false"
              aria-hidden="true"
              class="outIcon"
            >
              <g>
                <defs>
                  <linearGradient id="linear">
                    <stop offset="0%" stop-color="#3BAFD9"></stop>
                    <stop offset="100%" stop-color="rgb(33,149,192)"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="#fff"
                  d="M16.007 0c-8.299 0-14.023 6.836-14.023 14.024 0 5.88 2.982 8.636 4.107 9.916 0 0 4.093 4.585 12.068 8.060v-4.121c4.783-0.563 11.858-5.289 11.858-13.855-0.001-8.271-6.794-14.024-14.010-14.024z"
                  class="chatButton__svg-chat-path"
                ></path>
                <path
                  fill="url(#linear)"
                  d="M18.035 22.372v3.657c-0.014 0-2.729-1.364-4.276-2.574-2.926-2.236-6.498-4.416-6.498-9.438 0-4.993 4.149-8.622 8.622-8.622 0.005 0 0.011-0 0.017-0 4.744 0 8.591 3.838 8.605 8.579v0.043c0 5.162-4.164 7.779-6.47 8.355z"
                  class="innerIcon"
                ></path>
              </g>
            </svg>
            <div className="innerDotContainer"></div>
          </div>
        </a>
      </div> */}

  </>
   
    )
  }