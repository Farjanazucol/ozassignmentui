import UploadDocument from "@/pages/upload-order";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";
function Uploadform() {
  const router = useRouter();

  const UploadDocumentPage = () => {
    // Use router.push to navigate to the next page
    router.push("/upload-order");
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  /******Button Groups******/
  const [activeIndex, setActiveIndex] = useState(0);

  const buttons = [
    {
      label: "Writing",
      description:
        "Get your essay and assignment written from scratch by PhD expert",
    },
    {
      label: "Rewriting",
      description:
        "Paraphrase or rewrite your friend &apos;s essay with similar meaning at reduced cost",
    },
    {
      label: "Editing",
      description:
        "Proofread your work by experts and improve grade at Lowest cost",
    },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="text-center pb-6" style={{ color: "#1E4755" }}>
        <p className="text-3xl font-semibold">Assignment Help</p>
        <p className="pt-2 text-base">
          <i>
            Get Assignment Help From World &apos;s No.1 Assignment Help Company
          </i>
        </p>
      </div>

      <div className="isolate shadow-xl bg-white  rounded-md px-6 py-6 sm:py-8 lg:px-8 z-0">
        <div className="mx-auto  text-center  ">
          <p
            className="mt-1 text-2xl font-bold  leading-8 "
            style={{ color: "#1E4755" }}
          >
            Quick Upload
          </p>

          <form
            action="#"
            method="POST"
            className="mx-auto  max-w-7xl sm:mt-8 lg:mt-8 "
          >
            <div class="relative px-8 mt-8">
              <div class="absolute flex border border-transparent  h-full w-10 ">
                <div class="flex items-center justify-center  rounded-bl z-10 bg-gray-200 text-gray-600 text-lg h-full w-full">
                  <FaUserAlt />
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                id="name"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-12 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="relative px-8 mt-8">
              <div class="absolute flex border border-transparent  h-full w-10 ">
                <div class="flex items-center justify-center  rounded-bl z-10 bg-gray-200 text-gray-600 text-lg h-full w-full">
                  <MdEmail />
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                autoComplete="given-email"
                className="block w-full rounded-md border-0 px-12 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="relative px-8 mt-8">
              <div class="absolute flex border border-transparent  h-full w-10 ">
                <div class="flex items-center justify-center  rounded-bl z-10 bg-gray-200 text-gray-600 text-lg h-full w-full">
                  <BsTagFill />
                </div>
              </div>

              <input
                type="text"
                placeholder="Service Type"
                name="service"
                id="service"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-12 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>

            <div className=" sm:mt-8  items-center text-center">
              <Link href={"/upload-order"} onClick={UploadDocumentPage}>
                <button
                  type="submit"
                  className="  rounded-md  bg-orange-500 sm:px-5 px-2 py-2 mt-4 sm:py-2  max-w-xs text-center text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Submit My Details
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Uploadform;
