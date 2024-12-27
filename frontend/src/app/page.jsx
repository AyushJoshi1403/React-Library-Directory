'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Packages = () => {

  const [packageList, setPackageList] = useState([]);
  const token = localStorage.getItem('token');
  const router = useRouter();


  const fetchPackages = () => {
    axios.get('http://localhost:5000/package/getall', {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.table(result.data);
        setPackageList(result.data);
      }).catch((err) => {
        console.log(err);

        if (err?.response?.status === 403) {
          toast.error('Your are not authorized to view this page');
          router.push('/login')
        }
      });
  }

  useEffect(() => {
    fetchPackages();
  }, [])

  return (
    <div>
      <div>
        <div>
          <h1 className='text-center text-2xl font-bold'>List of Packages</h1>
        </div>
        <div>
          <div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Title
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Package Name
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Version
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Last Published
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Difficulty
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Downloads
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Published By
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Link
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
            <div>
              <label
                className='block text-sm mb-2 dark:text-white'>
                Created At
              </label>
              <input
                type="text"
                className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages