import CONSTANTS from "@/components/constants";
import { useRouter } from "next/router";
import React from "react";
import Style from "./blog.module.css"
export async function getStaticPaths() {
  const res = await fetch(`${CONSTANTS.NGROK_URL}oz/api/blogs`);

  const data = await res.json();

  // console.log(data);

  let pathsArray = [];

  let arrayLength = data.length;

  for (let i = 0; i < arrayLength; i++) {
    pathsArray.push({
      params: { slug: data[i].slug },
    });

    
  }

  const paths = pathsArray;

  return {
    paths: paths,

    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const res = await fetch(`${CONSTANTS.NGROK_URL}oz/api/blogs?slug=${slug}`);

  const blogItem = await res.json();

  // const slug = params.slug;

  const response = await fetch(`${CONSTANTS.NGROK_URL}oz/api/blogs`);

  const allBlogs = await response.json();

  // console.log(">>>>>>>>>>>", allBlogs);

  return {
    props: { blog: blogItem, allBlogs },

    revalidate: 10,
  };
}



function BlogDetails({ blog, allBlogs    }) {

  const router = useRouter();
  const blogUrlName = blog.slug;

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
   
       
       <div>
      {blog.map((blog) => (
        <div key={blog.id}>
              <div className="mx-auto w-full px-2 py-24 lg:px-32 sm:px-6 sm:pt-16  justify-between" style={{

backgroundImage: `url('/assets/aboutimage.png')`,

width: '100%', // Set width to 100%
height: '100%',



opacity: '0.8',
margin: '0 auto',
backgroundSize: 'cover',

backgroundAttachment: 'fixed',
backgroundRepeat: 'repeat-y',
backgroundPosition: 'top center', // Center the background image
}}>
<h1 className='text-center text-5xl font-bold leading-[3rem] text-white' > {blog.title}</h1>
</div>
<div className="mx-auto w-full px-2 py-24 lg:px-32 sm:px-6 sm:pt-16 grid-cols-2 justify-between">
         
          <div className={Style.CustomContainer} dangerouslySetInnerHTML={{ __html: blog.description }} />
        
          {/* You can display other details here */}
          <img src={blog.banner} alt={blog.banner_alt_text} />
          <h2 className="">{blog.banner_heading}</h2>
          <p>{blog.banner_description}</p>
        </div>
        </div>
      ))}
      </div>
  
      
   
  );
}

export default BlogDetails;

