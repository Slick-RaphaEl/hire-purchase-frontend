import App from 'next/app';
import React from 'react';
import Application from '../components/Application';
import MainLayout from '../components/layouts/MainLayout';

function application(props) {
    return (
        <MainLayout>
            <Application/>
        </MainLayout>
    );
}

export default application;