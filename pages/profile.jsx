import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Profile from "../components/Profile";
import girl from '../img/bus-1.jpeg';

const ProfilePage = () => {

  const phone = +23408031344386;
  const amount = 25000;

  return (
    <MainLayout>
      <Profile 
       image = {girl}
       heading="Ikpa Esther Uchechukwu"
       phone={phone}
       email="Boy@gmail/com"
       address="22 Lion street, new heaven Enugu"
       state="Enugu"
       program="Tailor"
       timeOnHirePurchase="4 months"
       amounToBePaidThisMonth={amount}
       timeLeftForPayment = "15 days"
      />
    </MainLayout>
    );
};

export default ProfilePage;
