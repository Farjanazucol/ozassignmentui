import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Services from "@/pages/services";
import { useRouter } from "next/router";
// import Services from "@/pages/services";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
 
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };




  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Set the active link when the component mounts based on the current route
    setActiveLink(router.pathname);

    // Add an event listener to update the active link when routes change
    const handleRouteChange = (url) => {
      setActiveLink(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // Remove the event listener when the component unmounts
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  },[router.pathname, router.events]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    router.push(href);
  };



  return (
    <>
      {/* Header Top */}
      <div className="bg-[#D6EEF1]">
        <div className="mx-auto w-7xl px-2 sm:px-6 lg:px-32">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center  ">
                <div className="flex  max-sm:hidden max-xs:hidden">
                  <Link
                    className=" flex text-lg font-medium text-[#1E4755]"
                    target="_blank"
                    href="tel:+91 9999999999"
                  >
                    <Image
                      src="/assets/call.png"
                      width={30}
                      height={20}
                      className="px-1"
                      alt="call"
                    />
                    +91 9999999999
                  </Link>
                </div>
                <div className="px-5  max-sm:hidden max-xs:hidden">
                  <Link
                    className=" flex text-lg font-medium"
                    href="https://www.ozassignments.com/"
                    target="_blank"
                    style={{ color: "#1E4755" }}
                  >
                    <Image
                      src="/assets/sms.png"
                      width={30}
                      className="px-1"
                      height={20}
                      alt="sms"
                    />
                    www.ozassignment.com
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-8 ">
              <div className="flex items-center">
                {/* <Link href={"/common/form"} className=" text-white px-4 py-2 mr-4 text-lg font-normal  rounded-xl   bg-orange-400 text-center  shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Order Now</Link> */}

                <Link
                 href="https://www.ozassignments.com/en/accounts/login/"
                  className=" pr-3 px-3 py-2 text-lg font-medium"
                  aria-current="page"
                  style={{ color: "#1E4755" }}
                >
                  Login
                </Link>
                <span style={{ color: "#1E4755" }}>/</span>

                <Link
                  href="https://www.ozassignments.com/en/accounts/signup/"
                  className="pr-4  px-3 py-2 text-lg font-medium"
                  style={{ color: "#1E4755" }}
                >
                  Signup
                </Link>
                <Link
                  href="#"
                  onClick={handleSearchIconClick}
                  className=" px-1 py-2 text-lg font-medium"
                  style={{ color: "#1E4755" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Link>

                <div>
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search Your Assignment Question Here..."
                      className="absolute top-0 right-0 text-star   bg-white mr-8 mt-2  text-white  pr-32 pl-4  w-1/4 py-3 z-50 rounded-md
           border-0 px-3.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <nav className="bg-white">
        <nav
          className="mx-auto flex w-full items-center justify-between pt-8 pb-0 p-4 lg:px-32"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href={"/"} className="-m-1.5 p-1.5 pb-8">
              <Image
                className="h-8 w-auto"
                src={"/assets/OZLogo.png"}
                width={200}
                height={80}
                alt="Your Company"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex md:gap-x-10 xl:gap-x-24 lg:gap-x-12">
            

            {/****Dropdown Services*****/}
            <Services/>
            {/****End Dropdown Services*****/}
            

<Link
        href="/reviews"
        className={`py-2 text-lg font-normal leading-6 pb-8 ${
          activeLink === '/reviews' ? 'text-[#1E4755] border-b-[3px] border-orange-600 pb-1' : 'text-[#1E4755]'
        }`}
        onClick={() => handleLinkClick('/reviews')}
      >
        Reviews
      </Link>
           
             <Link
        href="/subject"
        className={`py-2 text-lg font-normal leading-6 pb-8 ${
          activeLink === '/subject' ? 'text-[#1E4755] border-b-[3px] border-orange-600 pb-1' : 'text-[#1E4755]'
        }`}
        onClick={() => handleLinkClick('/subject')}
      >
        Subject
      </Link>
      <Link
        href="/blog"
        className={`py-2 text-lg font-normal leading-6  pb-8  ${
          activeLink === '/blog' ? 'text-[#1E4755] border-b-[3px] border-orange-600 pb-1' : 'text-[#1E4755]'
        }`}
        onClick={() => handleLinkClick('/blog')}
      >
        Blogs
      </Link>
      <Link
        href="/aboutus"
        className={`py-2 text-lg font-normal leading-6  pb-8  ${
          activeLink === '/aboutus' ? 'text-[#1E4755] border-b-[3px] border-orange-600 pb-1' : 'text-[#1E4755]'
        }`}
        onClick={() => handleLinkClick('/aboutus')}
      >
        About Us
      </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={"/upload-order"}
              className="text-white px-2 py-3 text-lg mb-8 font-normal  rounded-xl bg-orange-400 text-center  shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Upload Documents
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src={"/OZLogo.png"}
                  width={200}
                  height={80}
                  alt="Your Company"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  

                    {/****Dropdown Services*****/}
                    <div className="-mx-3 block rounded-lg py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50">
                    <Services/>
            
                    </div>
                   
                  <Link
                    href={"/reviews"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50"
                  >
                    Reviews
                  </Link>
                  <Link
                    href={"/subject"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50"
                  >
                    Subject
                  </Link>
                  <Link
                    href={"/Blog"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50"
                  >
                    Blogs
                  </Link>
                  <Link
                    href={"/aboutus"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                  <Link
                    href={"/uploaddocuments"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-[#1E4755] hover:bg-gray-50"
                  >
                    Upload Documents
                  </Link>
                </div>

                <div className="py-6 flex">
                  <Link
                    href={"/login"}
                    className="text-[#1E4755] block rounded-lg  text-base font-normal leading-7 hover:bg-gray-50"
                    aria-current="page"
                  >
                    Login
                  </Link>
                  <span className="text-[#1E4755] px-3">/</span>

                  <Link
                    href={"#"}
                    className="text-[#1E4755] block rounded-lg   text-base font-normal leading-7  hover:bg-gray-50 "
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>
  );
}





