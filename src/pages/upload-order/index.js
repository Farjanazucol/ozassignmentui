"use client";
import Link from "next/link";
import React, { useEffect, useState , useRef} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import CONSTANTS from "@/components/constants";
import * as Yup from 'yup';
import { useFormik ,Field} from 'formik';
import axios from "axios";

import { DatePicker,  } from 'rsuite';







function UploadDocument() {

  const router = useRouter()
  const [timezones, setTimezones] = useState([]);
  
  const fileRef = useRef(null);


  const [formData, setFormData] = useState({
    title:'',
   
    email: '',
    first_name: '',
    timezone: '',
    contact_no: '',
    deadline_hard: '',
    word:'',
    description: '',
   file:''


  });

  const initialValues = {
    name: '',
    email: '',
    contact: '',
    title: '',
    description: '',
    word: '',
    deadline_hard: '',
    select: '',
    file: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    contact: Yup.string().required('Contact No is required')
    .matches(/^[0-9]*$/, 'Contact number must contain only digits')
    .min(10, 'Phone number must be 10 digits')
    .max(12, 'Phone number must be 12 digits'),
    title: Yup.string().required('Service type is required'),
    
    description: Yup.string().required('Description is required'),
    deadline_hard: Yup.date().required('Date  is required')
  });

  


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);


 


  useEffect(() => {
  
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


 

  
 const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async(values) => {
        const formDataToSend = new FormData();
        formDataToSend.append('first_name', values.name);
        formDataToSend.append('email', values.email);
        formDataToSend.append('contact_no', values.contact);
        formDataToSend.append('title', values.title);
        formDataToSend.append('description', values.description);
        formDataToSend.append('word', values.word);
        formDataToSend.append('timezone', values.select);
        formDataToSend.append('deadline_hard', values.deadline_hard);
        formDataToSend.append('file', values.file);

        try{
          const response = await axios.post(
            "https://ecc3-2401-4900-1c54-f63d-6d8d-d2e-f30f-354d.ngrok-free.app/task/api/upload/",
            formDataToSend,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let responseData = response.data
          console.log("I am rtwe repsone", responseData)
          router.push("/thankyou")

        }catch(error){
          console.log("I am ewrror", error)
        }
        console.log(values);
      }})

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
                <h1 className=" font-extrabold text-4xl leading-[3rem] text-[#1E4755]">
                  Upload Your{" "}
                  <span className="text-orange-400 "> Assignment</span>
                  <br />
                </h1>
                <p
                  className="text-xl leading-10 pt-5 font-bold opacity-80"
                  style={{ color: "#1E4755" }}
                >
                  Solving queries around all things “assignments”
                </p>
                <p
                  className="text-base leading-8 max-w-lg pt-9 font-medium"
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
          <div className="w-full sm:w-9/12 xs:w-full md:w-1/2  xl:w-2/3 p-4 ">
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <h1 className="text-blue-500 font-medium text-2xl pb-12">
              Personal Details
            </h1>
            <div className="md:flex  mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Full Name:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Full Name"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.name && formik.touched.name
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.name}
                  </p>
                )}
              </div>
            </div>



            <div className="md:flex mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal mt-[1rem]  md:text-right mb-0  md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Email:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Email"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.email && formik.touched.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>



            <div className="md:flex md:items-center mt-6 mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                   Contact No:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="text"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Number"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.contact && formik.touched.contact
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.contact && formik.touched.contact && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.contact}
                  </p>
                )}
              </div>
            </div>

            <hr />

<h1 className="text-blue-500 font-medium text-2xl py-12">
  Assignment Details
</h1>
            <div className="md:flex md:items-center mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Service Type:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="text"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter service type or document type"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.title && formik.touched.title
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.title && formik.touched.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.title}
                  </p>
                )}
              </div>
            </div>



            <div className="md:flex md:items-center mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 -mt-[2.2rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Description:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="text"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter description about your requirement"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 pb-20 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.description && formik.touched.description
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.description && formik.touched.description && (
                  <p className="text-red-500 text-base mt-1">
                    {formik.errors.description}
                  </p>
                )}
              </div>
            </div>



            <div className="md:flex md:items-center mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                 Words:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="number"
                  name="word"
                  value={formik.values.word}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter no of words required to edit  or proofread"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.word && formik.touched.word
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.errors.word && formik.touched.word && (
                  <p className="text-red-500 text-base mt-1">
                    {formik.errors.word}
                  </p>
                )}
              </div>
            </div>



            <div className="md:flex md:items-center mt-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Deadline:
                </label>
              </div>
              <div className="md:w-7/12">
                <input
                  type="datetime-local"
                  name="deadline_hard"
                  value={formik.values.deadline_hard}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="YYYY-MM-DD-HR-MIN"
                  className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 focus:border-gray-200 ${
                    formik.errors.deadline_hard && formik.touched.deadline_hard
                      ? "border-red-500"
                      : ""
                  }`}
                />
                  {/* <DatePicker  editable={true} /> */}
                {formik.errors.deadline_hard && formik.touched.deadline_hard && (
                  <p className="text-red-500 text-base mt-1">
                    {formik.errors.deadline_hard}
                  </p>
                )}
              </div>
            </div>


            <div className="md:flex md:items-center mt-6 mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800 text-base font-normal md:text-right mb-0 mt-[1rem] md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  TimeZone:
                </label>
              </div>
              <div className="md:w-7/12">
          <select
            id="select"
            name="select"
            {...formik.getFieldProps('select')}
            placeholder="Asia/Kolkata"
            className={`hover:shadow-md appearance-none border-1 w-full py-2 p-2 text-gray-800 leading-6 focus:outline-none focus:bg-gray-50 bg-white border-gray-200 focus:border-gray-200 ${
              formik.touched.select && formik.errors.select ? 'border-red-500' : ''
            }`}
          >
            {/* Render options dynamically from the 'timezones' state */}
            {timezones.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
          {formik.touched.select && formik.errors.select && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.select}</p>
          )}
        </div>
            
            </div>
            <hr />
            {/* Repeat similar code blocks for other form fields */}
            <div className="col-span-full py-3">
              <h1 className="text-gray-800 font-medium text-2xl py-4 ">
                Add File
              </h1>
              <label className="relative  items-center text-center rounded-md bg-orange-600 px-3.5 py-4 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500rounded-sm cursor-pointer">
             
                <span className="px-2 text-base">+ Select files...</span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  // onClick={()=>fileRef.currebt.click()}
         
          accept=".jpg, .jpeg, .png, .gif, .pdf, .text"  // Specify allowed file types
              
                  ref={fileRef} 
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(event) => {
                    formik.setFieldValue('file', event.currentTarget.files[0]);
                  }}
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
                        
                      </label>
                    </div>
                  </div>
                </div>

                {formik.values.file && (
        <div>
        {formik.values.file.name}
        </div>
      )}
             
            </div>
            <div className="flex justify-center lg:justify-center xl:justify-center sm:justify-center md:justify-center">
              <button className=" items-center text-center rounded-md bg-orange-600  text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 px-10 py-4 mt-10">
                UPLOAD!
              </button>
            </div>
          </form>
          </div>

          <div className=" sm:px-8 xl:px-0 lg:px-0  w-full  md:w-1/2 xl:w-1/3 p-4  ">
            <div className="border-2 shadow-md pl-0 ">
              <div className="text-left sm:py-4 md:py-4 xl:py-4 xs:px-custom space-x-4 sm:px-4 md:px-4 xl:px-4 lg:px-4">
                <p className="font-bold text-blue-500 space-x-4 py-4">
                  <span className="font-bold text-blue-500 px-4 ">Offers</span>{" "}
                  <br />
                  <span className=" space-x-4 w-16  h-0.5 -mt-16 bg-black  inline-block"></span>
                </p>

                <Link href={""} className="text-base mt-16">
                  Offer 1
                </Link>
                <ul className="leading-8 py-4   text-normal opacity-70">
                  {" "}
                  <li>10% discount on 2 Assignments</li>
                  <li>15% discount on 3 Assignments</li>
                  <li>20% discount on 4 Assignments</li>
                </ul>

                <Link href={""} className="text-base mt-16">
                  Offer 2
                </Link>
                <ul className="leading-8 py-4   text-normal opacity-70">
                  {" "}
                  <li> 25% discount on 10 or more Assignments</li>
                  <li> 30% discount on 16 or more Assignments</li>
                </ul>
                <Link href={""} className="text-base mt-16">
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
                <Link href={""} className="text-base mt-16">
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

















