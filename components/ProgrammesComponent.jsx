import React from 'react';
import Image from 'next/image';
import ButtonFill from './ButtonFill';
import {useRouter} from  'next/router';

export default function ProgrammesComoponent({image,heading,paragraph}){
    const  router = useRouter();

	return(
	<div className="w-[90%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row my-10 programme-container">
	 <div className="w-[80%] md:w-[50%] mx-auto my-auto">
      <Image src={image} alt="Our Programmes" width={700} height={500} className="rounded-md"/>
	 </div>
	 <div className="programme-description flex flex-col px-10 w=[80%] md:w-[50%] mx-auto">
      <h2 className="text-2xl font-semi-bold uppercase text-center mb-5 text-green-500">
      {heading}
      </h2>
      <p className="text-base text-grey-800">
      {paragraph}
      </p>
      <ButtonFill action ="read more" onClick={ e => router.push('/application')}/>
	 </div>
	</div>
	)
}