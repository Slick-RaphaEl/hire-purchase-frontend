import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import MainLayout from '../components/layouts/MainLayout';
import youth from '../public/img/youth.png';
import list from '../public/img/list.png';
import Group1028 from '../public/img/Group 1028.png';
import Group1026 from '../public/img/Group 1026.png';
import nomail from '../public/img/nomail.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return(
    <MainLayout>
      <Carousel />
      <div className="">
        <div className="flex place-items-center justify-center">
          <div className="">
            <h1 className="md:text-5xl text-4xl font-bold"><span className="text-green-500">DON'T HAVE ENOUGH CAPITAL<br></br></span> FOR YOUR BUSINESS?</h1>
          </div>
          <div className="md:w-40 w-36 pt-20">
            <Image src={nomail} alt="image" className="" />
          </div>
        </div>
            <div className="">
                <p className="text-center text-2xl">Don&apos;t worry<br></br>
                <span className="text-green-500 font-bold">Hire purchase</span> got you! Start a business with as low as<br></br>Zero capital. Amazing right?<br></br>Apply for the listed job offers below and let&apos;s earn!!!</p>
            </div>
            <div className="flex justify-center mt-10 w-[60%] mx-auto">
              <Image src={youth} alt="image" className="rounded-md" />
            </div>
            <div className="flex justify-center my-8">
                <Link href="/programs">
                  <a className="py-2 bg-green-500 rounded-full px-8 text-2xl text-white md:top-[220%] top-[110%] absolute">APPLY NOW</a> 
                </Link>
            </div>
            <div className="flex justify-between place-items-center mt-20 w-[85%] mx-auto">
                <div className="">
                    <h3 className="text-3xl font-semibold">Get going in 4 easy steps</h3>
                    <div className="flex place-items-center mt-8">
                        <Image src={list} alt="image" className="w-10" />
                        <p className="text-2xl ml-3">Apply</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <Image src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Pick a Program</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <Image src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Get Approved</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <Image src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Start Earning</p>
                    </div>
                </div>
                <div className="ml-40 w-[50%]">
                  <Image src={Group1028} alt="image" />
                </div>
            </div>
            
            <div className="">
                <p className="text-center text-2xl mt-10">Get verified in minutes and matched with the perfect program to kickstart your journey.</p>
            </div>
            <div className="">
              <p className="text-center text-2xl mt-10">All we need is your name,<br></br>an email, a phone number,<br></br>your NIN or any identity card,<br></br>your home address and we're<br></br>good to go!</p>
            </div>
            <div className="flex justify-center mt-20 w-[50%] mx-auto">
                <Image src={Group1026} alt="image" />
            </div>
        </div>
      <Footer />
    </MainLayout>
  )
}
