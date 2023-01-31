import React from 'react';
import Image from 'next/image';

const MainBody = () => {

    return (
        <>
        {/* section one */}
        <div className="md:flex flex-row items-start p-2">
            <div className='caption-header text-6xl basis-4/5 capitalize my-10 px-10'>
                <h3>
                    don't have enough capital for your business ?
                </h3>
            </div>
            <div className="basis-1/2 px-10">
                <div className='img-container'>
                    <Image src={`/assets/images/posting-email-man.jpg`} alt="man posting email" width={500} height={500}  />
                </div>
            </div>
        </div>

        {/* section two */}
        <div>
            Yes
        </div>
        </>
    )
}

export default MainBody;