'use client'
import React from 'react';
import AuthenticatedComponent from '@/components/authenticatedComponent';
import LoginForm from '../login/page';

const Dashboard = () => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') || '' : '';

  return (
    <div className="w-screen h-screen flex">
      {token ? <AuthenticatedComponent /> : <LoginForm />}
    </div>
  )
};

export default Dashboard;
