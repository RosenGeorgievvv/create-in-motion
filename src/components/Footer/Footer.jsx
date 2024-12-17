import React from 'react'
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='w-full bg-gray-200 shadow-md'>
        <div className='flex justify-center items-center gap-5 p-4'>
          <a href='https://www.facebook.com/CreateInMotion' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800' style={{cursor: 'pointer'}}>
            <FaFacebook size={24} />
          </a>
        </div>
    </section>
  )
}

export default Footer