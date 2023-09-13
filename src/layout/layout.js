import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import Image from 'next/image'
export default function Layout({children}) {
    return (
   
  <>
 
  <Navbar/>
 <main>{children} </main>
  <Footer/>

  <div>
<Link href="https://api.whatsapp.com/send?phone=+61482082009&amp;text=Hi%2C" rel="noreferrer" className="mob_whatsapp w leftWhatsApp" id="leftWhatsApp" target="_blank">
<Image src="/assets/whatsapp--icon.svg" className="loading  fixed top-0  bottom-16 mt-custom -px-2 -left-24 " width="50" height="50" alt="icon" data-was-processed="true" style={{marginTop:"30rem", marginLeft:"-3px"}} />
</Link>
</div>







  </>
   
    )
  }