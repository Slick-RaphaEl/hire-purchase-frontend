import telephone from '../public/img/telephone.png';
import facebook from '../public/img/facebook.png';
import instagram from '../public/img/instagram.png';
import gmail from '../public/img/gmail.png';
import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className="">
            <div className="bg-gray-300 mt-20 py-5">
                <div className="">
                    <h2 className="text-center text-3xl font-semibold mt-10">Contact us:</h2>
                </div>
                <div className="mt-10 grid grid-cols-2 lg:ml-20 md:ml-8">
                    <div className="flex place-items-center">
                      <Image src={telephone} alt="" className="w-10" />
                      <p className="text-2xl ml-3 font-semibold">000-0000-0000</p>
                    </div>
                    <div className="flex place-items-center">
                      <Image src={facebook} alt="" className="w-10" />
                      <p className="text-2xl ml-3 font-semibold">Official Hire Purchase</p>
                    </div>
                   
                    <div className="flex place-items-center mt-8">
                      <Image src={gmail} alt="" className="w-10" />
                      <p className="text-2xl ml-3 font-semibold">HirePurchase@gmail.com</p>
                    </div>
                    <div className="flex place-items-center mt-8">
                      <Image src={instagram} alt="" className="w-10" />
                      <p className="text-2xl ml-3 font-semibold">OfficialHirePurchase</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;