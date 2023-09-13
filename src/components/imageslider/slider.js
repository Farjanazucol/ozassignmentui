import Image from 'next/image';
import React, { useEffect, useState } from 'react';



const Slider = () => {
    const cardData = [
        {
            image: '/assets/testimomials2.png',
          content:
            'Great Service, I am happy with OZ Assignments, They provided proofreading service at very low cost with 100% original content report.',
            authorname:'Joseph Penas',
            surname:'Brisbane'
        },
        {
          image: '/assets/testimomials3.png',
          content:
            'Such a great experience with you guys. I wanted to propose a business deal. Your experts helped me do it very professionally',
            authorname:'Fatima Khan',
            surname:'Sydney'
        },
        {
            image: '/assets/testimomials2.png',
          content:
            'You guys are great! I am very happy with the editing for my blog post.',
            authorname:'-- Wayne',
            surname:'Sydney'
        },
        {
            image: '/assets/testimomials2.png',
          content:
            'One to one direct interaction with full time experts really helped me rectify mistakes with my proposal.',
            authorname:'Joseph Penas',
            surname:'Brisbane'
        },
        {
            image: '/assets/testimomials2.png',
          content:
            'Such a great experience with you guys. I wanted to propose a business deal. Your experts helped me do it very professionally',
            authorname:'-- Maninder',
            surname:'Melbourne'
        },
        
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Change this interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full  overflow-hidden  h-full  bg-gray-50">
    
      {cardData.map((card, index) => (
        <div className=' text-center ' key={index}>
             <div
         
          className={` h-96 max-sm:h-80 py-8 ${currentIndex === index ? '' : 'hidden'}`}
        >
          <Image
          width={50}
          height={50}
            src={card.image}
            alt="Image"
            className=" items-center text-center mx-auto "
          />
          <p className=" inset-x-0 bottom-24 z-20 xl:w-2/5 lg:w-2/5  xs:w-[85%] mx-auto  py-8 text-md text-center sm:leading-4 lg:leading-8  bg-opacity-25 font-medium" style={{color:"#1E4755"}}>
            {card.content}
          </p>
          <p className="author mt-0">- <span >{card.authorname}</span> <small><em className="text-black">{card.surname}</em></small></p>
          
        </div>
            </div>
       
      ))}

      {/* <button
        onClick={back}
        className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color='gray'
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
      </button>

      <button
        onClick={next}
        className="absolute -mt-[2.8rem] right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
       <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color='gray'
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
      </button> */}

      <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {cardData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? ' bg-gray-400' : ' bg-gray-950'
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};


export default Slider;
