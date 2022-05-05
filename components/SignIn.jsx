import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function SignIn(props) {
    return (
        <div className='sign-in-section w-[90%] md:w-[98%] mx-auto flex flex-col md:flex-row justify-between'>
            {/* <span className='border-2 border-red-600'>baba</span> */}
            <div className="place-left side-img w-[80%] md:w-[50%] hidden sm:hidden lg:block relative md:mx-auto ">
                <div className="overlay absolute opacity-60 bg-green-600 h-[100%] w-[100%] left-0 top-0 z-50" ></div>
                <Image className='z-40' src={props.image} alt="sign in image"/>
            </div>
            <div className="place-right mx-auto my-10 md:my-36 w-[80%] md:w-[50%]">
                <h1 className="header-text text-center pt-2 text-3xl font-medium"><span className='text-green-500'>HIRE</span> PURCHASE</h1>
                <div className="btn-wrapper flex flex-col-reverse gap-6 pt-5 items-center">
                 {/* Google sign in button */}
                <button className="btn-2 border-2 border-grey-200 w-[100%] sm:w-[60%]  md:w-[50%] text-white rounded-lg bg-white">
                <a  className="button-link  block flex flex-row justify-between  items-center" href="http://www.facebook.com/" target="_blank">
                <FcGoogle className="bg-white text-blue-900 inline-block w-12 h-10"/>
                <span className='bg-red-600 inline-block w-auto h-10 pt-2 sm:pt-0 sm:h-12 px-16 sm:px-12 md:px-8 md:h-10 md:pt-2 text-sm'>Continue with google
                </span></a>
                </button>
                {/* facebook sign in button */}
                <button className="btn-2 border-2 border-grey-200 w-[100%] sm:w-[60%] md:w-[50%] text-white rounded-lg bg-white">
                <a  className="button-link block flex flex-row justify-between  items-center" href="http://www.facebook.com/" target="_blank">
                <FaFacebook className="bg-white text-blue-900 inline-block w-12 h-10"/>
                <span className='bg-blue-900 inline-block w-auto h-10 sm:h-12 pt-2 sm:pt-0 px-16 sm:px-12 md:px-8 md:h-10 md:pt-2 text-sm'>Sign in with Facebook
                </span></a>
                </button>
                <Link href='#'>
                <p className="cursor-pointer text-blue-900">Don't have an account click here</p>
                </Link>
                </div>
             </div>
        </div>
    );
}

export default SignIn;