'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAdn, faAngellist, faLess } from "@fortawesome/free-brands-svg-icons";
// import DatePicker from "react-datepicker"; 
import { useRouter } from "next/router";
//import "react-datepicker/dist/react-datepicker.css";
import Modals from "../../components/thankyou"
import Head from "next/head";

function UploadDocument() {
  // const [dateTime, setDateTime] = useState(new Date());
  const [loading, setLoading] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
		setLoading(true);

    const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
      contact: Number(event.target.contact.value),
      title:String(event.target.title.value),
      description:String(event.target.description.value),
      word:Number(event.target.word.value),
			message: String(event.target.message.value),
      timezone: String(event.target.timezone.value),
      file: String(event.target.file.value),
		};


    const response = await fetch(`${CONSTANTS.NGROK_URL}api/v1/user/upload/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});



    if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
      event.target.contact.value= "";
      event.target.title.value = "";
      event.target.description.value = "";
      event.target.word.value = "";
			event.target.message.value = "";
      event.target.timezone.value = "";
      event.target.file.value = "";
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}



  }












  const [value, setValue] = useState({ 
    startDate: null ,
    endDate: null 
    }); 

    const handleValueChange = (newValue) => {
      console.log("newValue:", newValue); 
      setValue(newValue); 
      } 


      const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const openModalThankYou =()=>{
if(isModalOpen == true){
  setIsModalOpen(openModal)
}
      }




      
  return (

    <>

<Head>
        <title> OZAssignment - Upload Order</title>
        <meta charset="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
    </Head>
  



   
<div className="bg-[#E6E7FD]">
<div className="  px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between">
  {/* <div className="container mx-auto"> */}
            <div className="flex flex-wrap  -mx-4">
   
  <div className="w-full sm:w-1/2 md:w-1/2  xl:w-1/2 p-4 ">
  <div>
  <h1 className=' font-extrabold text-5xl leading-[3rem] text-[#1E4755]' >Upload Your   <span className='text-orange-400 '> Assignment</span><br/>
</h1>
  <p className='text-2xl leading-10 pt-5 font-bold opacity-80'  style={{color:"#1E4755"}} >Solving queries around all things “assignments”
</p>
  <p className='text-xl leading-8 max-w-xl pt-9 font-medium'  style={{color:"#1E4755"}} >Facing trouble with giving your assignments a final touch? We at Oz, provide Online Proofreading and Editing Services. 
</p>



</div>
    
    </div>
   
   
  


<div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/2 p-4 ">
<Image  className='inline' src="/assets/uploadheader.png" alt='about' width={800} height={80} />
    </div>
    </div>
    {/* </div> */}
</div>
</div>


      <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between sm:grid-cols-1">
        {/* <div className="container mx-auto"> */}
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-2/3  xl:w-1/2 p-4 ">
              
              <form className="w-full" onSubmit={handleSubmit}>
                <h1 className="text-blue-500 font-medium text-2xl pb-12">
                  Personal Details
                </h1>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Full Name:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <input
                   
                      id="name"
                      type="text"
                      placeholder="Enter Full Name"
                      className="hover:shadow-md  appearance-none border-b-gray-400  border-t-0 border-l-0 border-r-0  text-gray-800  w-full py-2  leading-6 focus:outline-none focus:bg-white focus:border-gray-400"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter Email"
                      className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-10">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="contact"
                    >
                      Contact No:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <input
                      id="contact"
                      type="text"
                      placeholder="Enter Number"
                      className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <hr />

                <h1 className="text-blue-500 font-medium text-2xl py-12">
                  Assignment Details
                </h1>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="title"
                    >
                      Title:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <input
                      id="title"
                      type="text"
                      placeholder="Enter Assignment Title"
                      className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white"

                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="description"
                    >
                      Description:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <textarea
                      id="description"
                      placeholder="Enter Some Description"
                      className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  h-20  w-full pt-6 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white  bg-white border py-2   "
                     
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="words"
                    >
                      Words:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                    <input
                      id="word"
                      type="number"
                      placeholder="Enter Word Count"
                      className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2 text-gray-800  leading-6 focus:outline-none focus:bg-white focus:border-white"

                     
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="deadline"
                    >
                      Deadline:
                    </label>
                  </div>
                  <div className="md:w-9/12">
                   
                  {/* <Datepicker 
                  
                  placeholder="YYYY-MM-DD"
useRange={false} 
asSingle={true} 
value={value} 
onChange={handleValueChange} 
/>  */}
{/* 
<DatePicker
        selected={dateTime}
        onChange={date => setDateTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      /> */}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-10">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-800 text-xl font-normal md:text-right mb-0 mt-4 md:mb-0 pr-4"
                      htmlFor="timezone"
                    >
                      TimeZone:
                    </label>
                  </div>
                   
             
           
                  <div className="md:w-9/12">
                    
                    <select
                 id="timezone"
                 placeholder="Asia/Kolkata"
                 className="hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-500 bg-white border   w-full py-2 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white"
                 required
                 autoComplete="off"
                >
                  <option>Asia/Kolkata</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                  </div>
                </div>
                <hr />

                <div className="col-span-full py-3">
                  <h1 className="text-gray-800 font-medium text-2xl py-4 ">
                    Add File
                  </h1>

                 


                  <label className="relative bg-red-500 px-2 py-4 rounded-sm text-white text-center cursor-pointer">
                    
                    <span className="px-2  text-xl">
                      
                   + Select files...</span>
                  
                    <input
                      type="file"
                      name="input"
                      id="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      // onchange="handleFileChange(this)"
                    />
                  </label>
                  <div className="mt-6 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer border-gray-600 rounded-sm bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-white-600 focus-within:ring-offset-2 hover:text-white-500"
                        >
                            <p className="text-gray-800 pr-8 text-sm/[17px] ">Drop file here</p>
                      <input id="file-upload" name="file-upload" type="file"  className="relative focus:ring-white focus:border-transparent focus:border-white"  />
                        </label>
                      
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-center xl:justify-center  sm:justify-center md:justify-center">
                  <button className=" bg-red-500 text-white px-10 py-2 mt-10 "   onClick={openModalThankYou}>
                    
                  UPLOAD!
                </button>
                  </div>
                </div>
               
              </form>
            </div>

            <div className="w-full sm:w-1/1 md:w-1/3  xl:w-1/2 sm:px-8 xl:px-0 lg:px-0 p-6">
              <div className="border-2 shadow-md pl-0 ">
                <div className="text-left sm:py-4 md:py-4 xl:py-4 xs:px-custom space-x-4 sm:px-4 md:px-4 xl:px-4 lg:px-4">
                  <p className="font-bold text-blue-500 space-x-4 py-4">
                    <span className="font-bold text-blue-500 px-4 ">Offers</span> <br />
                    <span className=" space-x-4 w-16  h-0.5 -mt-16 bg-black  inline-block"></span>
                  </p>

                  <Link href={""} className="text-xl mt-16">
                    Offer 1
                  </Link>
                  <ul className="leading-8 py-4   text-normal opacity-70">
                    {" "}
                    <li>10% discount on 2 Assignments</li>
                    <li>15% discount on 3 Assignments</li>
                    <li>20% discount on 4 Assignments</li>
                  </ul>

                  <Link href={""} className="text-xl mt-16">
                    Offer 2
                  </Link>
                  <ul className="leading-8 py-4   text-normal opacity-70">
                    {" "}
                    <li> 25% discount on 10 or more Assignments</li>
                    <li> 30% discount on 16 or more Assignments</li>
                  </ul>
                  <Link href={""} className="text-xl mt-16">
                    Offer 3
                  </Link>
                  <ul className="leading-8 py-4   text-normal opacity-70">
                    {" "}
                    <li>
                      25% discount on every assignment for every new student
                      recommended by you who orders with us. Get 4 of your
                      friends to order with us and get one assignment free.
                    </li>
                  </ul>
                  <Link href={""} className="text-xl mt-16">
                    Offer 4
                  </Link>
                  <ul className="leading-8 py-4   text-normal opacity-70">
                    {" "}
                    <li>
                      Bring your friend to order with us. Get 10% of every order
                      amount paid by your friend in perpetuity in your Locus
                      wallet.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 pt-8 " style={{justifyItems:"center"}}>
<Image src={"/assets/badge1.png"} width={80} height={70} alt="badge1" />
<Image src={"/assets/badge2.png"} width={80} height={70} alt="badge2" />
              </div>
            </div>
            {/* <Modals isOpen={isModalOpen} closeModal={closeModal} /> */}
          </div>
        {/* </div> */}
      </div>
    
   
    </>
  );
}

export default UploadDocument;
