import telephone from './telephone.png';
import whatsapp from './whatsapp.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import gmail from './gmail.png';

const Footer = () => {
    return ( 
        <footer className="">
            <div className="bg-gray-300 mt-20">
                <div className="">
                    <h2 className="text-center text-3xl font-semibold mt-10">Contact us:</h2>
                </div>
                <div className="mt-10 grid grid-cols-2 ml-20">
                    <div className="flex place-items-center">
                      <img src={telephone} alt="" className="w-10" />
                      <p className="text-2xl ml-3">000-0000-0000</p>
                    </div>
                    <div className="flex place-items-center">
                      <img src={facebook} alt="" className="w-10" />
                      <p className="text-2xl ml-3">Official Hire Purchase</p>
                    </div>
                    <div className="flex place-items-center mt-8">
                      <img src={whatsapp} alt="" className="w-10" />
                      <p className="text-2xl ml-3">000-0000-0000</p>
                    </div>
                    <div className="flex place-items-center mt-8">
                      <img src={gmail} alt="" className="w-10" />
                      <p className="text-2xl ml-3">HirePurchase@gmail.com</p>
                    </div>
                    <div className="flex place-items-center mt-8">
                      <img src={instagram} alt="" className="w-10" />
                      <p className="text-2xl ml-3">OfficialHirePurchase</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;