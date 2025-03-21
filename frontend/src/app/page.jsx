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
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default page