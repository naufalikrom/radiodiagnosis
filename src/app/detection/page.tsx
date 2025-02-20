import React from 'react'
import Navbar from '../components/organisms/navbar';
import Maintenance from '../components/organisms/maintenance';
import Footer from '../components/organisms/footer';

const Detection = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-7 pl-7 pr-7">
        <Maintenance/>
      </main>
      <div className='fixed z-50 bottom-0 left-0 w-full'>
        <Footer />
      </div>
    </>
  )
}

export default Detection;