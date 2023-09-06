import React, { useState } from 'react'
//  import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";


 import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import Link from 'next/link';

function Form() {

    const [startDate, setStartDate] = useState(new Date());
    const [count, setCount] = useState(1)
    const [word, setWords] = useState(250)
   
    const [tooltipVisible, setTooltipVisible] = useState(false);
  
    const showTooltip = () => {
      setTooltipVisible(true);
    };
  
    const hideTooltip = () => {
      setTooltipVisible(false);
    };
  
    
  
    const PageWordsCountDec = ()=>{
  
      if (count > 1 && word >= 250) {
        setCount(count - 1);
        setWords(word - 250);
      }
    //   if(count > 1)
    //   setCount(count-1)
    //   setWords(word-250)
     }
  
    const PageWordsCountIncr = ()=>{
      setCount(count+1)
      setWords(word+250)
    }
  
  
    
    const [date, setDate] = useState<Date | null>(new Date());
  
  /******Button Groups******/ 
    const [activeIndex, setActiveIndex] = useState(0);
  
    const buttons = [
      { label: 'Writing', description: 'Get your essay and assignment written from scratch by PhD expert' },
      { label: 'Rewriting', description: "Paraphrase or rewrite your friend's essay with similar meaning at reduced cost" },
      { label: 'Editing', description: 'Proofread your work by experts and improve grade at Lowest cost' },
    ];
  
    const handleButtonClick = (index) => {
      setActiveIndex(index);
    };
  





  return (
    <div>
 
 

    <div className='text-center pb-6' style={{color:"#1E4755"}}>
      <p className='text-3xl font-semibold'>Assignment Help</p>
      <p className='pt-2 text-base'>
  <i>
  Get Assignment Help From World's No.1 Assignment Help Company
  </i>
  </p>
    </div>
  
  <div className="isolate bg-white rounded-md px-6 py-6 sm:py-8 lg:px-8 z-0">
   
    <div className="mx-auto max-w-2xl text-center">
     
      <p className="mt-1 text-lg leading-8 text-black-600">It’s time you sought help from MyAssignmentHelp.com Experts</p>
     
     <div className="inline-flex items-center rounded-md sm:mt-6 ">
  {buttons.map((button, index) => (
          <button
            key={index}
            className={`text-black hover:bg-slate-0 ${
              activeIndex === index ? ' hover:bg-blue-900 bg-blue-900 text-white' : 'text-blue-900  hover:bg-blue-900 hover:text-white bg-white'
            } text-sm border border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center`}
            onClick={() => handleButtonClick(index)}
          >
            <span>{button.label}</span>
          </button>
        ))}
             <span className='px-2'>
             <div className="relative mt-20 md:mt-0">
        <Link href={"/"}
          tabIndex={0}
          role="link"
         
        aria-label="tooltip 1"
        className="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative mt-20 md:mt-0"
        onMouseOver={showTooltip}
        onFocus={showTooltip}
        onMouseOut={hideTooltip}
        >
         
  
          <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"  />
  </svg>
        </div>
  
        </Link>
        {tooltipVisible && (
          <div
            id="tooltip1"
            role="tooltip"
            className="z-20 -mt-48 w-80 absolute transition duration-150 ease-in-out right-0 ml-0  shadow-lg bg-gray-300 p-4 rounded"
          >
         
  <div
    id="tooltip1"
    role="tooltip"
    className="z-20 -mt-16 w-96 absolute transition duration-150 ease-in-out right-0 ml-0 shadow-lg bg-gray-300 p-4 rounded"
  >
    {/* Triangle Indicator */}
    <div className="absolute top-full right-4 -mt-2 w-4 h-4 transform rotate-45 bg-gray-300"></div>
    
    {/* <div className="assignment-type-info-tooltip text-sm text-gray"> */}
      <p>
        <strong>Writing</strong> Get your essay and assignment written from scratch by PhD expert
      </p>
      <p>
        <strong>Rewriting:</strong> Paraphrase or rewrite your friend's essay with similar meaning at reduced cost
      </p>
      <p>
        <strong>Editing:</strong> Proofread your work by experts and improve grade at Lowest cost
      </p>
    </div>
    </div>
  // </div>
  
        )}
      </div>
             
                              
  
             </span>
          </div>
    
    </div>
   
    <form action="#" method="POST" className="mx-auto mt-4 max-w-7xl sm:mt-8 ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        
         
          <div className="mt-4">
            <input type="text" placeholder='Enter Your Email Id' name="first-name" id="email" autoComplete="given-email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
          </div>
       
      
        
         
        <div className="">
        
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Country</label>
            <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm">
              <option>IN(+91)</option>
             
            </select>
           
          </div>
          <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
  <div>
      
  <div className="mt-0">
            <input type="text" placeholder='Your Subject/Course Code' name="subject" id="subject" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
          </div>
  
         
      <div className="mt-5">
  
      <Flatpickr
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" 
      placeholder='Deadine'
      name='deadline'
      id='deadline'
        data-enable-time
        // value={date}
        onChange={(selectedDates) => {
          setDate(selectedDates[0]);
        }}
      />
      </div>
        
  <div>
  
  </div>
  
  
  
  
  
  <div className="mt-5">
          <input type="text"
          placeholder={`${count} Page / ${word} Words`} name="page" id="page" autoComplete="given-page" 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          
            readOnly
         
           
            value={`${count} Page / ${word} Words`}
           
            aria-label="words"
          />
          <input
          
            type="hidden"
            readOnly
            autoComplete="off"
            value="1"
            id="page123"
            className="form-control"
          />
        
            <button
             style={{
              position: "absolute",
              float: "right",
              marginTop: "-34px",
              marginRight: "0",
              textAlign: "right",
              alignItems: "end",
              marginLeft: "14rem",
            
            }}
              type="button"
              onClick={PageWordsCountDec}
             
            >
             -
            </button>
            <button
             type="button"
             onClick={PageWordsCountIncr}
           
            style={{
              position: "absolute",
              float: "right",
              marginTop: "-34px",
              marginRight: "0",
              textAlign: "right",
              alignItems: "end",
              marginLeft: "16rem",
            
            }}
             
            >
             +
            </button>
         
        </div>
  </div>
  
        <div className="sm:col-span-1">
         
          <div className="mt-0">
            <textarea name="message" id="message" placeholder='Write assignment description
  ' rows={4} className="block w-full rounded-md border-0 h-40 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <div className="flex gap-x-4 py-8 sm:col-span-2">
         
          <input type="checkbox" className="rounded text-orange-500 -mt-2" />
          <label className="text-sm leading-6 text-gray-600" id="checkbox-1-label">
          I accept the T&C and other policies of the website and agree to receive offers and updates.
          
          </label>
        </div>
      </div>
  
      <div className=" sm:mt-0 items-center text-center">
        <button type="submit" className="  rounded-md  bg-green-500 px-16 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Free Assistence</button>
      </div>
    </form>
  
    
  </div>
  
    
  </div>
  )
}

export default Form
