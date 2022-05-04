import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import MainLayout from '../components/layouts/MainLayout';
import youth from '../public/img/youth.png';
import list from '../public/img/list.png';
import Group1025 from '../public/img/Group 1025.png';
import Group1026 from '../public/img/Group 1026.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return(
    <MainLayout>
      <Carousel />
      <div className="">
            <div className="pt-10">
                <h2 className="text-center text-3xl font-semibold text-green-500">Don't have enough capital for your business?</h2>
            </div>
            <div className="">
                <p className="text-center text-2xl mt-8">Don't worry<br></br>Hire purchase got you! Start a business with as low as<br></br>Zero capital. Amazing right?<br></br>Apply for the listed job offers below and let's earn!!!</p>
            </div>
            <div className="flex justify-center mt-10 w-[60%] mx-auto">
              <Image src={youth} alt="image" className="rounded-md" />
            </div>
            <div className="flex justify-center my-8">
                <Link href="/programs">
                  <a className="py-4 bg-green-500 rounded-full px-3 text-2xl text-white">APPLY NOW</a> 
                </Link>
            </div>
            <div className="flex justify-around mt-20 w-[85%] mx-auto">
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
                <div className="ml-10 w-[50%]">
                  <Image src={Group1025} alt="image" />
                </div>
            </div>
            
            <div className="">
                <p className="text-center text-2xl mt-10">Get verified in minutes and matched with the perfect program to kickstart your journey.</p>
            </div>
            <div className="flex justify-center mt-20 w-[50%] mx-auto">
                <Image src={Group1026} alt="image" />
            </div>
        </div>
      <Footer />
    </MainLayout>
  )
}
