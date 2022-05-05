import React from "react";
import Footer from "../components/Footer";
import MainLayout from "../components/layouts/MainLayout";
import Profile from "../components/Profile";
import { getSession } from "next-auth/react";
// import girl from '../img/bus-1.jpeg';

const ProfilePage = ({data}) => {

  return (
    <MainLayout>
      <Profile 
      heading= {data.name}
       phone={data.phone}
       email={data.email}
       address={data.address}
       state={data.state}
       program={data.program}
       timeOnHirePurchase={data.timeOnHirePurchase}
       amountToBePaidThisMonth={data.amountToBePaidThisMonth}
       timeLeftForPayment = {data.timeLeftForPayment}
      />
      <Footer />
    </MainLayout>
    );
};

export default ProfilePage

export async function getServerSideProps(context){

  const phone = +23408031344386;
  const amount = 25000;

const session = await getSession(context)
 return{
   props:{
     data: session ?
    {name:"solobachi",
     phone:phone,
     email:"solobachi02@gmail.com",
     address:"No 23 Zik's drive UNN",
     state:"Enugu",
     program:"Web design",
     timeOnHirePurchase:"4 months",
     amountToBePaidThisMonth:amount,
     timeLeftForPayment:"30 days"
    } 
      : 
     {name:"username",
     phone:phone,
     email:"useremail@gmail.com",
     address:"22 Lion street, new heaven Enugu",
     state:"Lagos",
     program:"Tailor",
     timeOnHirePurchase:"4 months",
     amountToBePaidThisMonth:amount,
     timeLeftForPayment:"15 days"
    }
   }
 }
}
