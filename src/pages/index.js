import Image from 'next/image'
import * as Yup from 'yup';
import Link from 'next/link'


import ImageSlider from '../components/imageslider/slider'
import Form from '../components/common/uploadform'

import { useRouter } from 'next/router';
import Head from 'next/head';
import { useFormik } from 'formik';
import axios from 'axios';
//import Callback from '@/components/modals/callback';
import { useState } from 'react';

import Callback from '@/components/modals/callback';

export default function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility



  const router = useRouter();

  const UploadDocumentPage = () => {
    // Use router.push to navigate to the next page
    router.push('/upload-order');
  };




  const initialValues = {
  
    email: '',
    contact: '',
    description:''
    
  };

  const validationSchema = Yup.object().shape({
   
    email: Yup.string().required('Email is required').email('Invalid email address'),
    contact: Yup.string().required('Contact No is required')
    .matches(/^[0-9]*$/, 'Contact number must contain only digits')
    .min(10, 'Phone number must be 10 digits')
    .max(12, 'Phone number must be 12 digits'),
   
    description: Yup.string().required('Description is required'),
    
  });




  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async(values, { resetForm }) => {
      const formDataToSend = new FormData();
      
      formDataToSend.append('email', values.email);
      formDataToSend.append('contact_number', values.contact);
      formDataToSend.append('description', values.description)

      
      try{
        const response = await axios.post(
          "https://www.ozassignments.com/oz/api/contact-us",
          formDataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let responseData = response.data
        console.log("I am rtwe repsone", responseData)
       
        
       resetForm()
  
       
               // Open the ThankyouModal
               setIsModalOpen(true);

        

      }catch(error){
        console.log("I am ewrror", error)
      }
      console.log(values);
    }})






  




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
      <div className="bg-white " >
        <div className="   px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between" style={{ backgroundColor: "#E6E7FD" }}>
          {/* <div className="container mx-auto"> */}
          <div className="flex flex-wrap">

            <div className="w-full sm:w-9/12 xs:w-full md:w-1/2  xl:w-2/3 p-4 ">
              <div>
                <h1 className='font-semibold text-3xl leading-[3rem]' style={{ color: "#1E4755" }} >Online <span className='text-orange-400'>Proofreading</span>
                  <span> Services</span></h1>
                <p className='text-2xl leading-10 pt-5 font-bold opacity-80' style={{ color: "#1E4755" }} >Solving queries around all things “assignments”
                </p>
                <p className='text-base leading-8 max-w-lg  pt-9 font-medium' style={{ color: "#1E4755" }} >Facing trouble with giving your assignments a final touch? We at Oz, provide Online Proofreading and Editing Services.
                </p>

                <div className=' mt-10'>
                  <div>
                    <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                      <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>

                      </div>
                      <div>
                        <p className='px-2'>
                          100+ Students Support Executive to Listen Students Requirement</p>


                      </div>


                    </div>
                  </div>
                  <div>
                    <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>

                      </div>
                      <div>
                        <p className='px-2'>
                          Highest Grade for All Academic Needs</p>


                      </div>


                    </div>
                  </div>
                  <div> <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>

                    </div>
                    <div>
                      <p className='px-2'>
                        10+ Years Of Experience in Academic Writing
                      </p>


                    </div>


                  </div></div>

                  <div>
                    <div>
                      <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                        <div >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                          </svg>

                        </div>
                        <div>
                          <p className='px-2'>
                            100+ Students Support Executive to Listen Students Requirement</p>


                        </div>


                      </div>
                    </div>
                    <div>
                      <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                          </svg>

                        </div>
                        <div>
                          <p className='px-2'>
                            Highest Grade for All Academic Needs</p>


                        </div>


                      </div>
                    </div>
                    <div> <div className='text-base col-span-2 flex' style={{ color: "#1E4755" }}>
                      <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>

                      </div>
                      <div>
                        <p className='px-2'>
                          10+ Years Of Experience in Academic Writing
                        </p>


                      </div>


                    </div></div>
                  </div>



                </div>

              </div>

            </div>





            <div className="w-full  md:w-1/2 xl:w-1/3 p-4   ">
              {/* Form Design */}

              <Form />
              {/* End Form Design */}

            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Online Educational Assistance */}
      <div className="bg-white py-8 pb-24">
        <div className='text-center items-center  pt-16 px-2 lg:px-32 sm:px-6 sm:pt-16'>
          <h1 className='text-3xl font-semibold' style={{ color: "#1E4755" }}>Online Educational Assistance</h1>
          <div className='items-center text-center'>
            <span className=' w-1/3  h-0.5 pt-0 bg-orange-600 inline-block'></span>
            <br />
            <span className='absolute -mt-3 -ml-6 w-14  h-2 items-center bg-orange-600 inline-block'></span>
          </div>
        </div>
        <div className="mx-auto w-7xl flex lg:mt-16 mb-0 pt-16 px-2 sm:py-32 lg:pb-10 lg:px-32 sm:px-6 sm:pt-16 sm:grid-cols-1  grid-cols-4 justify-between">
          {/* <div className="container mx-auto"> */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 pt-10 ">
              <div className="c-card block border-2  min-h-[16rem] min-w-min  rounded-xl items-center text-center ">


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-12 inline-grid w-20 h-20 bg-gray-100 hover:bg-blue-900 text-blue-900 rounded-full p-3  hover:text-white">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>


                <div className='px-4 py-4'>
                  <p className='text-lg py-4 font-semibold opacity-80'>Professional Experts</p>
                  <p className='text-gray-600 ' >Our professional experts are well versed in various fields. They are well trained individuals who are experiences in their areas.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 pt-10  min-h-[300px]">
              <div className="c-card block border-2  min-h-[16rem] min-w-min   rounded-xl items-center text-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-12 inline w-20 h-20 bg-gray-100 hover:bg-blue-900 text-blue-900  rounded-full p-3 hover:text-white">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>



                <div className='px-4 py-4'>
                  <p className='text-lg py-4 font-semibold opacity-80'>Complete Privacy
                  </p>
                  <p className='text-gray-600 ' >Security of your data is paramount to us. We use advanced security measures to prevent any leakage and misuse of your data.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 pt-10  ">
              <div className="c-card min-h-[16rem] block border-2  min-w-min rounded-xl items-center text-center ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-12 inline w-20 h-20 bg-gray-100 hover:bg-blue-900 text-blue-900  rounded-full p-3 hover:text-white">
                  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>



                <div className='px-4 py-4'>
                  <p className='text-lg py-4  font-semibold opacity-80'>Quality Assurance</p>

                  <p className='text-gray-600'>We not only assure you best quality but also provide best style and formatting for your documents.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 pt-10  min-w-min">
              <div className="c-card min-h-[16rem] block border-2   min-w-min rounded-xl items-center text-center ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" inline-grid -mt-12  w-20 h-20 bg-gray-100 hover:bg-blue-900 text-blue-900   rounded-full p-3 hover:text-white">
                  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>




                <div className='px-4 py-4'>
                  <p className='text-lg py-4 font-semibold opacity-80'>

                    Timely Delivery
                  </p>
                  <p className='text-gray-600 '>
                    Our account based tracking system enables us to always keep you updated and deliver your work on time.
                  </p>
                </div>

              </div>

            </div>
          </div>
          {/* </div> */}
        </div>





        <div className=" sm:mt-8  mt-10  items-center text-center">
          <Link href={"/upload-order"} onClick={UploadDocumentPage}>
            <button type="submit" className="  rounded-md bg-orange-600 px-8 py-3 text-center  border-2 text-white hover:text-white   hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={UploadDocumentPage}>Order Now</button>
          </Link>
        </div>
      </div>
      {/* Online Educational Assistance End*/}

      {/* Assignment Help Services */}
      <div className="bg-white py-4 pb-24" style={{ backgroundColor: "#fbfbfb" }}>
        <div className='text-center items-center px-2 lg:px-32 sm:px-6 sm:pt-16'>
          <h1 className='text-3xl font-semibold' style={{ color: "#1E4755" }}>Assignment Help Services</h1>
          <div className='items-center text-center'>
            <span className=' w-1/3  h-0.5 pt-0 bg-orange-600 inline-block'></span>
            <br />
            <span className='absolute -mt-3 -ml-6 w-14  h-2 items-center bg-orange-600 inline-block'></span>
          </div>
        </div>

        <div className=" flex  pt-16 px-2  lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-x-8 gap-y-4">
          {/* <div className="container mx-auto"> */}
          <div className="flex flex-wrap -mx-4 ">

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pt-10">
              <div className='text-center  xs:max-w-full max-w-[400px] min-h-[650px] border-solid border  rounded-xl border-gray-300  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 skew-y-0 grid-rows-4'>




                <div><Image className='inline py-2' src="/assets/online_assignment.svg" alt='onlineassesment' width={90} height={80} />
                </div>

                <div> <h1 className='text-lg  font-semibold opacity-80  py-2 px-2'>Online Assignment Help</h1></div>
                <div> <p className='text-start text-gray-600 texr-base leading-7  py-1 px-4'>MyAssignmenthelp.com is the leading assignment help provider worldwide. We have an exclusive
                  assignmenthelp
                  service for Indian students who are pursuing their degrees overseas. We have a team of
                  assignment
                  writing experts from top universities to help these students in the best possible manner. Each
                  of
                  these academic writers possesses extensive knowledge and expertise. They draft top-notch and
                  plagiarism-free
                  assignments.
                </p></div>

                <div className=" items-center text-center">
                  <Link href={"/"}>
                    <button type="submit" className="  rounded-md bg-white-600 px-8 py-3 text-center border-gray-300  border text-gray-800 hover:text-white  hover:border-orange-500  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More...</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pt-10">
              <div className='text-center xs:max-w-full max-w-[400px] min-h-[650px] border-solid border  rounded-xl border-gray-300  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 skew-y-0 grid-rows-4'>




                <div><Image className='inline py-2' src="/assets/custom_writing.svg" alt='dissertation' width={90} height={80} />
                </div>

                <div> <p className='text-lg py-2 px-2 font-semibold opacity-80'>Custom Essay Writing Help</p></div>
                <div> <p className='text-start text-gray-600 texr-base leading-7  py-1 px-4'>MyAssignmenthelp.com helps Indian students to compose different types of essays within the
                  givendeadline.
                  With a highly qualified and experienced group of essay writing experts, we assist the students
                  to
                  complete due essay tasks with complete ease and 100% plagiarism free content. We provide 100
                  percent
                  original and customized essay help solutions on any subject and topics. Our services include,
                  custom
                  essay writing, editing of essay, proofreading.</p>
                </div>

                <div><Link href={"/"}>
                  <button type="submit" className="  rounded-md bg-white-600 px-8 py-3 text-center border-gray-300  border text-gray-800 hover:text-white  hover:border-orange-500  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More...</button>
                </Link></div>

              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pt-10">
              <div className='text-center xs:max-w-full  max-w-[400px] min-h-md-[450px] min-h-[650px] border-solid border rounded-xl border-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 skew-y-0 grid-rows-4'>

                <div> <Image className='inline py-2' src="/assets/dissertation.svg" alt='dissertation' width={90} height={80} />
                </div>
                <div> <p className='text-lg  font-semibold opacity-80  py-2 px-2'>

                  Dissertation Writing Help
                </p></div>
                <div>
                  <p className='text-start text-gray-600 texr-base leading-7  py-1 px-4'>
                    Experts, at MyAssignmenthelp.com, are capable of delivering dissertations utilizing both primary and secondary research. We understand that each course has different requirements in terms of research methodologies. This is the reason we assign subject-specific experts who can give you the best idea on whether quantitative and qualitative research is appropriate for you.
                  </p>
                </div>

                <div className="  items-center text-center">
                  <Link href={"/"}>
                    <button type="submit" className="  rounded-md bg-white-600 px-8 py-3 text-center border-gray-300  border text-gray-800 hover:text-white  hover:border-orange-500  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More...</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pt-10">
              <div className='text-center items-center xs:max-w-full max-w-[400px] min-h-[650px] border-solid border  rounded-xl border-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 skew-y-0 hover:scale-110  duration-300 grid-rows-4'>





                <div>  <Image className='inline py-2' src="/assets/all_writing.svg" alt='dissertation' width={90} height={80} />
                </div>

                <div><h1 className='text-lg font-semibold opacity-80  py-2 px-2'>

                  All Writing Services
                </h1></div>
                <div>
                  <p className='text-start text-gray-600 texr-base leading-7  py-1 px-4'>
                    We at MyAssignmenthelp offer all types of online academic services, be it homework help, coursework help, case study help, thesis/research paper writing help and online exam help. And for each service, each subject and each topic, we dedicate a expert writer who has knowledge in that specific field of study. Experience impeccable academic writing service like never before.
                  </p>
                </div>
                <div className=" py-6 items-center text-center">
                  <Link href={"/"}>
                    <button type="submit" className="  rounded-md bg-white-600 px-8 py-3 text-center border-gray-300  border text-gray-800 hover:text-white  hover:border-orange-500  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More...</button>
                  </Link>
                </div>
              </div>


            </div>
          </div>

          </div>
        {/* </div> */}



      </div>
      {/* Assignment Help Services End */}



      <div className="bg-white py-8 pb-24">
        <div className='text-center items-center px-2 lg:px-32 sm:px-6 sm:pt-16'>

          <h1 className='text-3xl font-semibold' style={{ color: "#1E4755" }}>Testimonials</h1>
          <div className='items-center text-center'>
            <span className=' w-1/5  h-0.5 pt-0 bg-orange-600 inline-block'></span>
            <br />
            <span className='absolute -mt-3 -ml-6 w-14  h-2 items-center bg-orange-600 inline-block'></span>
          </div>

          <div className="mx-auto w-7xl flex  pt-16 px-2   sm:pt-16">
            <ImageSlider />
          </div>







        </div>

      </div>

      {/* Contact Page */}

      <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between sm:grid-cols-1 ">

        <div className="flex flex-wrap  -mx-4">



          <div className="w-full sm:w-1/2 md:w-1/3  xl:1/4 p-1 pt-20 ">
            <div className=' border-2 mt-5'>
              <div className='flex px-3 py-2 space-x-4 space-y-8'>

                <div>
                  <h1 className='text-left text-3xl text-[#1E4755]' >CONTACT DETAILS</h1>
                  <span className=' w-[4rem]  h-0.5 pt-0 bg-orange-600 inline-block'></span>
                  <p className='py-2'>Please find the below contact details and contact us today!</p>
                  <div className='py-4'>
                    <Image
                      src="/assets/sms.png"
                      width={30}
                      className="px-1"
                      height={20}
                      alt="sms"
                    />
                    <Link href="mailto:support@ozassignments.com" target='_blank'> support@ozassignments.com
                    </Link>
                  </div>
                </div>
              </div>



            </div>



          </div>
          <div className="w-full sm:w-1/2 md:w-7/12  xl:w-8/12 p-4 px-8 pt-0">
            <div>
              <h1 className='text-left font-b text-3xl text-[#1E4755] '>REQUEST FOR <span className='text-orange-600'>CALL BACK</span>
              </h1>
              <span className=' w-[4rem] h-0.5 pt-0 bg-orange-600 inline-block'></span>
              <form  className="mx-auto  max-w-7xl " onSubmit={formik.handleSubmit}>
                <div className=' grid grid-cols-2  py-2 space-x-8'>


                  <div className="mt-6">
                  <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Enter Your  Email*'
                  className={`block w-full hover:shadow-md appearance-none border-1 rounded-md py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.email}
                  </p>
                )}
                   
                  </div>

                  <div className="mt-6 ">
                  <input
                  type="text"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Enter contact number*'
                  className={`block w-full hover:shadow-md appearance-none border-1 rounded-md py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.contact && formik.touched.contact
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.contact && formik.touched.contact && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.contact}
                  </p>
                )}
                   
                  </div>


                </div>

                <div className="mt-6 ">
                  <textarea type="text" placeholder='Message..*'  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}  className={`block h-36 w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 hover:shadow-md appearance-none border-1 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200${
                    formik.errors.description && formik.touched.description
                      ? "border-red-500"
                      : ""
                  }`}>

                  </textarea>
                  {formik.errors.description && formik.touched.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.description}
                  </p>
                )}
                </div>

                <div className=" sm:mt-6  items-center text-center">
                  <button type="submit" className="  rounded-md  bg-orange-600 sm:px-10 px-2 py-2 mt-4 sm:py-2 md:px-20 xl:px-10 xl:py-3  text-center text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Submit Request</button>

                </div>
              </form>


            </div>
          </div>

        </div>
      </div>
      
      <Callback isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </>
  )
}
