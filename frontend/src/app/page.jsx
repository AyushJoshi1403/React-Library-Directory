'use client';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='border bg-gray-900 border-transparent'>
        <div className='text-center text-3xl font-bold mt-10 mb-6'>
          <h1>List of librarys</h1>
        </div>
        <div className='text-center'>
          <input
            className='w-[75%] py-3 px-4 border bg-transparent border-gray-600 rounded-l mb-8 hover:'
            type="text" placeholder='Search libraries...'
          />
        </div>
        <div>
          <div>
            
            <div>
              <div className='flex justify-center'>
                <div className='w-[75%] bg-gradient-to-r from-purple-500 to-indigo-500 text-white border border-gray-600 rounded-lg shadow-lg p-6 mb-8'>
                  <h2 className='text-2xl font-bold mb-4'>Library 1</h2>
                  <div className='grid grid-cols-2 gap-4'>
                    <p><strong>Package Name:</strong> Example Package</p>
                    <p><strong>Version:</strong> 1.0.0</p>
                    <p><strong>Last Published:</strong> 2025-04-01</p>
                    <p><strong>Difficulty:</strong> 3</p>
                    <p><strong>Downloads:</strong> 1500</p>
                    <p><strong>Published By:</strong> John Doe</p>
                  </div>
                  <p className='mt-4'><strong>Link:</strong> <a href='https://example.com' className='text-yellow-300 underline'>https://example.com</a></p>
                  <p><strong>Created At:</strong> 2025-03-15</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default page;