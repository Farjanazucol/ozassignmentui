import React from "react";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Thankyou() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

 
  return (
    
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg  text-left  transition-all sm:my-8 sm:w-full sm:max-w-md">
              <div className="bg-gray-400 px-2 pb-4 pt-5 sm:p-6  sm:pb-4">
                <div>
                  <h1 className="text-5xl text-center text-slate-800">
                    Congratulations
                  </h1>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2 text-center">
                      <p className="text-md text-white">
                        {" "}
                        You have successfully uploaded your assignment.
                      </p>
                      <p className="text-md text-white py-2">
                        We are currently reviewing your assignment details.
                        Click here to chat with one of our operators regarding
                        it. We have also sent you details of your account on the
                        email provided.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-400 justify-between px-4 py-3 sm:flex  sm:px-6">
                <Link
                  href="https://chatserver.comm100.com/chatWindow.aspx?siteId=227686&planId=195# 
"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Chat with Us
                  </button>
                </Link>
                <Link
                  href="https://www.ozassignments.com/en/accounts/login/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    ref={cancelButtonRef}
                  >
                    Go To Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
     
  );
}

export default Thankyou;
