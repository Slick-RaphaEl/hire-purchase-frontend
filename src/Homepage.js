import youth from './youth.png';
import list from './list.png';
import Group1025 from './Group 1025.png';
import Group1026 from './Group 1026.png';

const Homepage = () => {
    return ( 
        <div className="">
            <div className="">
                <h2 className="text-center text-3xl font-semibold">Don't have enough capital for your business?</h2>
            </div>
            <div className="">
                <p className="text-center text-2xl mt-8">Don't worry<br></br>Hire purchase got you! Start a business with as low as<br></br>Zero capital. Amazing right?<br></br>Apply for the listed job offers below and let's earn!!!</p>
            </div>
            <div className="flex justify-center mt-10">
                <img src={youth} alt="" className="w-3/5" />
            </div>
            <div className="flex justify-center">
                <button className="py-4 bg-green-rgba rounded-full w-64 absolute top-3/4 text-2xl text-white">APPLY NOW</button>
            </div>
            <div className="flex justify-around mt-20">
                <div className="">
                    <h3 className="text-3xl font-semibold">Get going in 4 easy steps</h3>
                    <div className="flex place-items-center mt-8">
                        <img src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Apply</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <img src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Pick a Program</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <img src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Get Approved</p>
                    </div>
                    <div className="flex place-items-center mt-10">
                        <img src={list} alt="" className="w-10" />
                        <p className="text-2xl ml-3">Start Earning</p>
                    </div>
                </div>
                <div className="ml-10">
                    <img src={Group1025} alt="" className="w-4/5" />
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <button className="py-4 bg-green-rgba rounded-full w-64 text-2xl text-white">APPLY NOW</button>
            </div>
            <div className="">
                <p className="text-center text-2xl mt-20">All we need is your name,<br></br>an email, a phone number,<br></br>Your NIN or any identity card,<br></br>Your home address and we're<br></br>good to go</p>
            </div>
            <div className="flex justify-center mt-20">
                <img src={Group1026} alt="" className="w-5/12" />
            </div>
        </div>
     );
}
 
export default Homepage;