import React from 'react'
import Image from 'next/image';
import ButtonFill from '../../components/ButtonFill'
import MainLayout from '../../components/layouts/MainLayout'
import keke from '../../img/keke-2.jpeg';
import Link from "next/link";

function Keke_drip() {
  return (
    <MainLayout><div className='Major_container'>
        <div className='container'>
        <Image src={keke} alt="Our keke Programme"/>
      rock that keke now
      </div>

            <Link href={'/profile'} >
            <ButtonFill action ="submit" onClick={()=>{}}/>
            </Link>

      
      </div>
    </MainLayout>
  )
}

export default Keke_drip
