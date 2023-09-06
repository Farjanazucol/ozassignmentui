import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../components/constants'
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';




export async function getServerSideProps() {
  const res = await fetch(`${CONSTANTS.NGROK_URL}oz/api/services`)
  console.log(res)
  const data = await res.json()

  return {
    props: { data }
  }
}



function Services({ data }) {



  return (

    <div className="group inline-block">
      
      <Link
        href={"/"}
        className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center  text-lg font-normal"
        aria-current="page"
      >
        <span className="pr-1 font-normal flex-1 text-[#1E4755]">Services</span>
        <span className="font-normal">
          <BiChevronDown className='w-6 h-6 text-[#1E4755]' />
        </span>
      </Link>
      <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-80 z-50 text-sm">
        {data && data.map((object, i) => (
          <li key={i.id} className="rounded-sm py-1 px-3 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
              <span className="pr-1 flex-1 ">{object.title}</span>
              <BiChevronDown className='w-6 h-6 text-[#1E4755] hover:text-orange-500' />
            </button>
            <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-80 z-50">
              {object.children.map((child) => (
                <li key={child.id} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
                    <span className="pr-1 flex-1">{child.title}</span>
                    <BiChevronDown className='w-6 h-6 text-[#1E4755] hover:text-orange-500' />
                  </button>
                  <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-80 z-50">

                    {child.children.map((grandchild, i) => (
                      <li key={grandchild.id} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <Link href={'services/' + grandchild.slug} key={i} className="w-full text-left flex items-center outline-none focus:outline-none hover:text-orange-500">
                          <span className="pr-1 flex-1">{grandchild.title}</span>

                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>


  )
}

export default Services
