import React from 'react'
import {FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='w-full bg-gray-200 shadow-md'>
        <div className='flex justify-center items-center gap-12 p-4'>
          <a href='https://www.facebook.com/CreateInMotion' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800' style={{cursor: 'pointer'}}>
            <FaFacebook size={32} />
          </a>
          
          <a href='https://www.instagram.com/create_in_motion?igsh=NGRnc3A2ZzVteHR4' target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:text-pink-800' style={{cursor: 'pointer'}}>
            <FaInstagram size={32} />
          </a>

          <a href="mailto:triibria11@gmail.com" className='text-gray-700 hover:text-gray-900' style={{cursor: 'pointer'}}>
            <FaEnvelope size={32} />
          </a>
        </div>
    </section>
  )
}

export default Footer