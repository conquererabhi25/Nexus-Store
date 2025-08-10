'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        
      <div>
        {children}
      </div>
    </>
  )
}

export default Providers
