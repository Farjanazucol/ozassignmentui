import React from 'react'

function About() {
  return (
    <div className='bg-white'>
      <div className="mx-auto w-full px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  justify-between" style={{

backgroundImage: `url('/assets/aboutbg.jpg')`,

width: '100%', // Set width to 100%
height: '100%',



opacity: '0.9',
margin: '0 auto',
backgroundSize: 'cover',

backgroundAttachment: 'fixed',
backgroundRepeat: 'repeat-y',
backgroundPosition: 'top center', // Center the background image
}}>
<h1 className='text-center text-5xl font-bold leading-[3rem] text-white' >About Us</h1>



</div>

<div className="mx-auto w-full px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  justify-between space-y-4">
  <h1 className='text-3xl font-bold text-[#555555]'>Online Proof Reading Services of Australia
</h1>
<p className='text-normal text-gray-800'>Oz Assignments is the leading online editing service provider, based in Australia. We are the stalwarts in providing the best quality online proofreading service for the students. Our online service is specially designed for helping students studying at Australian Universities. Our services are basically focused on providing the students with high-quality academic guidance so that they can score better grades in their services – papers. Moreover, we are focused on serving the students the best possible way we can. As students often find it hard to manage many balls in the air, they feel many difficulties in their academics. To share their workload, we have come up with our online services.

</p>
<h1 className='text-3xl font-bold text-[#555555]'>Who We Are?</h1>
<p className='text-normal text-gray-800'>Oz Assignments is an online proofreading services company based in Australia. This company is being run by postgraduate students from many leading Australian universities. We have faced many problems during our studies related to service-based because of many online websites which were not authentic and legitimate. This is why we took one step ahead and started our own services for helping the students. We decided to launch a website which is based in Australia, as we have experienced that there is always a communication gap between the students and the online proofreading service companies. So, we provide the editing services in Australia, for the Australian students by Australian tutors 
{/* onlyOnline Assignment Help

Online Assignment Help*/}
 </p> 
 <h1 className='text-3xl font-bold text-[#555555]'>
 Our Policies
 </h1>
 <p className='text-normal text-gray-800'>
 We have a very well organized framework of functioning. With proper management, we work according to the requirements of the students. Our core policies include:
</p>
<div className=''>
  <p className='text-normal text-gray-800 py-2'>
  <span className='  font-bold text-[#555555]'>1. Quality & Content:</span> A well structured, professionally written services is capable enough of scoring better grades. Our team composes the best quality editing services. The content, format, writing styles etc. all are of high quality.
  </p>
<p className='text-normal text-gray-800 py-2'>
<span className=' text-[#555555] font-bold'>2. Timely Delivery: </span>A common problem students face with proofreading services on delivery time. It’s worthless and wastes of time & money if the students receive their services late. We work hard to meet out the deadlines so that students face no problem with their services. On-Time Delivery enables the students to revise and prepare their project works further.
</p>
<p className='text-normal text-gray-800 py-2'>
<span className=' text-[#555555] font-bold'>3. No Plagiarism Policy:</span> We provide the original content. We strongly follow our No Plagiarism Policy and don’t compromise with it. We are highly concerned with the safety of the students. If the students submit plagiarized content, they may face serious problems.
</p>
<p className='text-normal text-gray-800 py-2'>
<span className=' text-[#555555] font-bold'>4. Satisfaction Guarantee:</span>Students’ satisfaction is our main focus. This is our commitment to meet out all the possible requirements a student expects from us. For this, we are open 24x7. We can be contacted round the clock to make the students’ interaction with us a pleasant experience.
</p>
<p className='text-normal text-gray-800 py-2'>
<span className=' text-[#555555] font-bold'>5. Best Pricing Policy:</span>Our Best Pricing Policy ensures that you get them services within your pocket budget. We provide cheap editing services so you don’t have to bother about your hard earned money. We provide you the quality affordable services.
</p>


<p className='text-normal text-gray-800 py-2'>We are here to help you with all your proofreading problems. We ensure you that our services will bring you academic excellence. Our team has many professionals and experts tutors. We cover all the subjects which a student studies at college or university. Thousands of the students have been benefited with our online services so contact us today and feel comfortable.</p>
</div>








</div>
    </div>
  )
}

export default About


// Cards main page
{/* new Cards */}

{/* <div className="bg-white " >
        <div className="mx-auto w-7xl flex  pt-16 px-2 lg:py-16 sm:py-16 lg:px-32 sm:px-6 sm:pt-16 sm:grid-cols-1 grid-cols-3 justify-between">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4  p-4">
                <p className="c-card block border-2 rounded-lg  overflow-hidden">

                  <div className="p-4">

                    <div className="  items-center text-center text-sm text-gray-600">

                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                      <p>27 Aug 2023</p>
                      </div>

                    <p className="mt-2 text-md  font-bold">Project Management
</p>
<p className='text-sm'>Essay: 2 Pages, Deadline: 5 days</p>
                    <p className="text-sm py-4">The assignment is received with the turnin report, after vetting the completed work, seems good to me, thank you</p>
<p><i className='fa faFlag'></i>
User ID:
<span className='text-sm'>8***81 Singapore</span></p>
                  </div>

                </p>
             
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <p className="c-card block border-2 rounded-lg overflow-hidden">

                  <div className="p-4">

                    <div className="flex justify-between items-center text-sm text-gray-600">

                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                      <p>27 Aug 2023</p>
                      </div>

                    <p className="mt-2  font-bold">Finance</p>
                    <p className='text-sm'>Essay: 2 Pages, Deadline: 5 days</p>
                    <p className="text-sm  py-4">Good feedback received from the assignment. It was good working with you. Thank you!</p>
                    <p><i className='fa faFlag'></i>
User ID:
<span className='text-sm'>5***42 South Africa</span></p>
                  </div>
                 
                </p>
                <div className="w-0 h-0 absolute
  border-b-[20px] border-t-transparent
  border-l-[25px] border-l-white
  border-t-[-10px] border-b-transparent"></div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <p className="c-card block border-2 rounded-lg overflow-hidden">

                  <div className="p-4">

                    <div className=" items-center text-sm text-gray-600">

                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg></div>

                    <h2 className="mt-2 mb-2  font-bold">Maths</h2>
                    <p className="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>

                  </div>

                </p>
               
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
                <div className="c-card block border-2 rounded-lg items-center text-center ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" inline-grid -mt-8  w-20 h-20 bg-gray-100 hover:bg-blue-900 text-blue-900   rounded-full p-3 hover:text-white">
  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
</svg>

  

  
<div className='pt-2 '>
  <p className='text-xl py-4 font-semibold opacity-80'>

  Timely Delivery
  </p>
  <p className='text-gray-600 '>
  Our account based tracking system enables us to always keep you updated and deliver your work on time.
  </p>
</div>

                </div>
              
              </div>

            </div>
          </div>

        </div>
      </div> */}
