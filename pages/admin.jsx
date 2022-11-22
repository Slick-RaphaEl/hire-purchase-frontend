import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import AdminBoard from '../components/AdminBoard';

function admin(props) {
    return (
        <div>
          <MainLayout>
            <AdminBoard/>
          </MainLayout>
        </div>
    );
}

export default admin;