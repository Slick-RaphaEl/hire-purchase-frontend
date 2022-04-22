import React from 'react'
import Image from 'next/image';
import ButtonFill from '../../components/ButtonFill'
import MainLayout from '../../components/layouts/MainLayout'
import tailor from '../../img/tailor.jpg'
import Link from "next/link";

function Tailoring() {

  return (
    <MainLayout><div className='Major_container'>
      <div className='container'>
      <Image className='image' src={tailor} alt="Our tailoring Programme"/>
    hello
    </div>
        
          <Link href={'/profile'}>
          <ButtonFill action ="submit" onClick={()=>{}}/>
          </Link>
          
    
  </div>
  </MainLayout>
  )
}

export default Tailoring
