'use client';
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <div className='border bg-gray-900 border-transparent'>
          <div className='text-center text-3xl font-bold mt-10 mb-6'>
            <h1>List of librarys</h1>
          </div>
          <div className='text-center'>
            <div className='relative w-[75%] mx-auto'>
              <input
                className='w-full py-3 px-4 border bg-gray-800 text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                type='text' placeholder='Search libraries...'
              />
              <button className='absolute right-2 top-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-purple-600'>
                Search
              </button>
            </div>
          </div>
        </div>  

        <div>
          <div>

            <div>
              <div className='flex justify-center mt-12'>
                <div className='w-[75%] text-white border border-gray-600 rounded-lg shadow-lg p-6 mb-8'>
                  <h2 className='text-2xl font-bold mb-4'>Example Package</h2>
                  <div className='grid grid-cols-2 gap-4'>
                    {/* <p><strong>Package Name:</strong> Example Package</p> */}
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