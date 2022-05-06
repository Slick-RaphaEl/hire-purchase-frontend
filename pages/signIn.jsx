import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import SignIn from '../components/SignIn';
import signInPhoto from '../sign-in-images/sign-in-image.jpeg';
export default function sigIn(props) {
    return (
        <MainLayout>
        <SignIn image={signInPhoto} />
        </MainLayout>
    );
}

