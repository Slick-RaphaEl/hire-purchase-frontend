import App from 'next/app';
import React from 'react';
import Application from '../components/Application';
import Footer from '../components/Footer';
import MainLayout from '../components/layouts/MainLayout';

function application(props) {
    return (
        <MainLayout>
            <Application/>
            <Footer />
        </MainLayout>
    );
}

export default application;