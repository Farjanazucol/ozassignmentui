
import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

function Callback() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)
  
  return (
    <div>


 
 
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg lg:max-w-2xl">
                <div className="bg-white">
                  <div className=" items-center">
                   <Image src="/assets/contactimage.png" width={1000} height={600} alt='callback' />
                    <div className="mt-3 text-center sm:ml-4 sm:mt-8 sm:text-left">
                      <div as="h3" className="text-center text-3xl font-normal leading-6 text-gray-600">
                      Callback Requested Successfully!
                      <span className=' w-4/5  h-0.5 pt-0 bg-sky-200 inline-block'></span>
                      </div>

                      <div className="mt-3">
                        <p className="text-base text-center text-gray-500 pb-6 ">
                        Our specailst will contact you shortly and you will recive a prior notification from us before we call.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-base font-normal text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  



    </div>
  )
}

export default Callback