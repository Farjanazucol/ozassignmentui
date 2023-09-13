import React from 'react';
import CONSTANTS from '@/components/constants';
import { useRouter } from 'next/router';
import Style from "./services.module.css"
import Form from '@/components/common/uploadform';
import Image from 'next/image';
export async function getStaticPaths() {
  const res = await fetch(`${CONSTANTS.NGROK_URL}oz/api/services`);
  const data = await res.json();

  const paths = data.map((service) => ({
    params: { slug: service.slug.toString() }, // Ensure 'slug' is a string
  }));

  return {
    paths,
    fallback: true, // or 'blocking' if you prefer SSR with fallback
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  
  const [serviceRes, allServicesRes] = await Promise.all([
    fetch(`${CONSTANTS.NGROK_URL}oz/api/services?slug=${slug}`),
    fetch(`${CONSTANTS.NGROK_URL}oz/api/services`),
  ]);

  if (!serviceRes.ok || !allServicesRes.ok) {
    // Handle fetch errors gracefully
    return {
      notFound: true, // or other error handling logic
    };
  }

  const serviceItem = await serviceRes.json();
  const allServices = await allServicesRes.json();

  return {
    props: {
      service: serviceItem,
      allServices,
    },
    revalidate: 10,
  };
}

function ServiceDetails({ service, allServices }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className='p-4'>Loading...</div>;
  }

  return (
    


<div>
{/* 
<div className="bg-[#E6E7FD] ">

  


</div> */}



{service.map((service) => (




      <div key={service.id}>
         <div className=" bg-[#E6E7FD] pt-16 px-2 lg:py-16 sm:py-16 lg:px-32 sm:px-6 sm:pt-16 grid-cols-2 justify-between">
{/* <div className="container mx-auto"> */}
    <div className="flex flex-wrap -mx-4">
    <div className="w-full sm:w-9/12 xs:w-full md:w-1/3  xl:w-2/3  p-4 pt-10">
  <div>
    <h1 className=' font-extrabold sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl w-[70%] leading-[3rem]' style={{ color: "#1E4755" }} >{service.banner_heading
}

    </h1>
    <div className="flex ">
    <p className='text-xl leading-8 xl:w-[70%] md:w-[100%] sm:w-[100%] pt-9 font-medium' >{service.banner_description
}
    </p>
   
       
        </div>
    {/* <div className={Style.iconContainer}>
      <div className={`${Style.ordrSlider} flex grid-cols-3`} >
        <div className={Style.sliderItem} >
          <div className={Style.Col}>
            <div className={Style.Col_Gr}>
              <div className={Style.Poly}></div>
              <div className={Style.Info}>
              <Image src="/assets/order-deleverd.png" alt='star-ban' width={90} height={80} />
                <span><b>2,229,766</b></span>
                <span>Orders Delivered</span>
              </div>
            </div></div>
        </div>
        <div className={Style.sliderItem}>
          <div className={Style.Col}>
            <div className={Style.Col_Or}>
              <span className={Style.Poly}></span>
              <div className={Style.Info}>
              <Image src="/assets/star-ban.png" alt='star-ban' width={90} height={80} />
                <span><b>4.9/5
</b></span>
                <span>5 Star Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.ordrSlider}>
        <div className={Style.sliderItem}>
          <div className={Style.Col}>
            <div className={Style.Col_Gr}>
              <div className={Style.Poly}></div>
              <div className={Style.Info}>
              <Image src="/assets/experts-ban.png" className='bg-gray' alt='star-ban' width={90} height={80} />
                <span><b>5,245</b></span>
                <span>PhD Experts
</span>
              </div>
            </div></div>
        </div>
      </div>
    </div>
</div> */}
  </div>
  </div>
  <div className="w-full  xl:w-1/3 p-4 pt-10">
  {/* Form Design */}

  <Form />
  {/* End Form Design */}
</div>

<div>

</div>
</div>
{/* </div> */}
</div>  
<div className="mx-auto w-full px-6 py-24 lg:px-32 sm:px-6 sm:pt-16 grid-cols-2 justify-between">
       
        <div  dangerouslySetInnerHTML={{ __html: service.description }} />
      
        
        {/* <img src={service.banner} alt={service.banner_alt_text} />
        <h2 className="">{service.banner_heading}</h2>
        <p>{service.banner_description}</p> */}
      </div>

      </div>
    ))}
    </div>


  );

}

export default ServiceDetails;
