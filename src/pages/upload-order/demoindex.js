"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import CONSTANTS from "@/components/constants";








function UploadDocument() {

  const [timezones, setTimezones] = useState([]);
  


  const [formData, setFormData] = useState({
    title:'',
   
    email: '',
    first_name: '',
    timezone: '',
    contact_no: '',
    deadline_hard: '',
    word:'',
    description: ''
   


  });


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);


 

    // Create a function to update the form data state when input fields change
    const handleChange = (e) => {
      console.log("setting data", e)
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  useEffect(() => {
    // Fetch the timezone data from your API or external source
    fetch('https://www.ozassignments.com/oz/api/timezones')
      .then((response) => response.json())
      .then((data) => {
        setTimezones(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching timezone data:', error);
        setLoading(false);
      });
  }, []);


 

  const onSubmit = async () => {
    // e.preventDefault();
   //`${CONSTANTS.NGROK_URL}api/v1/user/upload/`,
    setLoading(true);
    console.log("formData", formData)
    try {
     
    const response = await fetch(` https://7986-2401-4900-1c54-f63d-ffa5-f1f5-14e7-5b55.ngrok-free.app/task/api/upload/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      
      console.log("Message sent successfully");

      setLoading(false);

      reset(); // Reset the form

    } 
    else {

      console.error('Form submission failed');

      setLoading(false);
    }
  }

  catch (error) 
  {
    console.error('Error sending form data:', error);
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
                <h1 className=" font-extrabold text-5xl leading-[3rem] text-[#1E4755]">
                  Upload Your{" "}
                  <span className="text-orange-400 "> Assignment</span>
                  <br />
                </h1>
                <p
                  className="text-2xl leading-10 pt-5 font-bold opacity-80"
                  style={{ color: "#1E4755" }}
                >
                  Solving queries around all things “assignments”
                </p>
                <p
                  className="text-xl leading-8 max-w-xl pt-9 font-medium"
                  style={{ color: "#1E4755" }}
                >
                  Facing trouble with giving your assignments a final touch? We
                  at Oz, provide Online Proofreading and Editing Services.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/2 p-4 ">
              <Image
                className="inline"
                src="/assets/uploadheader.png"
                alt="about"
                width={800}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  grid-cols-2 justify-between sm:grid-cols-1">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-2/3  xl:w-1/2 p-4 ">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Full Name is required",
                    }}
                    render={({ field }) => (
                      <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                        {...field}
                        placeholder="Enter Full Name"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
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
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                    }}
                    render={({ field }) => (
                      <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                        {...field}
                      
                        placeholder="Enter Email"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
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
                  <Controller
                    name="contact"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Number is required",
                    }}
                    render={({ field }) => (
                      <input
                      type="text"
                      name="contact_no"
                      value={formData.contact_no}
                      onChange={handleChange}
                        {...field}
                       
                        placeholder="Enter Number"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.contact ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
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
                  <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Title is required",
                    }}
                    render={({ field }) => (
                      <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                        {...field}
                        placeholder="Enter Assignment Title"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.title ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
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

                {/* <div className="md:w-9/12">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{
                  required: "Description is required",
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    type="text"
                    placeholder="Enter Some Description"
                    className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  h-20  w-full pt-6 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white  bg-white border py-2   " ${
                      errors.description ? "border-red-500" : ""
                    }`}
                  ></textarea>
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div> */}

                <div className="md:w-9/12">
                  <textarea
                  
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
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
                     name="word"
                    value={formData.word}
                    onChange={handleChange}
                    
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
                  <Controller
                    name="date"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Date is required",
                    }}
                    render={({ field }) => (
                      <input
                      
                      name="deadline_hard"
                      value={formData.contact_no}
                      onChange={handleChange}
                     
                        {...field}
                        type="date"
                        formate="YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z]"
                        placeholder="Deadline"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-400  w-full py-2  text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.date ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </p>
                  )}
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
                  <Controller
                    name="select"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Select is required",
                    }}
                    render={({ field }) => (
                      <select
                        {...field}
                        placeholder="Asia/Kolkata"
                        className={`hover:shadow-md appearance-none border-t-0 border-l-0 border-r-0 border-b-gray-500 bg-white border   w-full py-2 text-gray-800 leading-6 focus:outline-none focus:bg-white focus:border-white ${
                          errors.select ? "border-red-500" : ""
                        }`}
                      >
                        {/* Render options dynamically from the 'timezones' state */}
        {timezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
                      </select>
                    )}
                  />
                  {errors.select && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.select.message}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className="col-span-full py-3">
                <h1 className="text-gray-800 font-medium text-2xl py-4 ">
                  Add File
                </h1>

                <label className="relative bg-red-500 px-2 py-4 rounded-sm text-white text-center cursor-pointer">
                  <span className="px-2  text-xl">+ Select files...</span>

                  <input
                  
                    type="file"
                    name="input"
                    id="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    // onchange="handleFileChange(this)"
                    value={formData.file}
                    onChange={handleChange}
                  />
                </label>
                <div className="mt-6 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer border-gray-600 rounded-sm bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-white-600 focus-within:ring-offset-2 hover:text-white-500"
                      >
                        <p className="text-gray-800 pr-8 text-sm/[17px] ">
                          Drop file here
                        </p>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="relative focus:ring-white focus:border-transparent focus:border-white"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-center xl:justify-center  sm:justify-center md:justify-center">
                  <button className=" bg-red-500 text-white px-10 py-2 mt-10 ">
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
                  <span className="font-bold text-blue-500 px-4 ">Offers</span>{" "}
                  <br />
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
                    recommended by you who orders with us. Get 4 of your friends
                    to order with us and get one assignment free.
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

            <div
              className="grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 pt-8 "
              style={{ justifyItems: "center" }}
            >
              <Image
                src={"/assets/badge1.png"}
                width={80}
                height={70}
                alt="badge1"
              />
              <Image
                src={"/assets/badge2.png"}
                width={80}
                height={70}
                alt="badge2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadDocument;

















