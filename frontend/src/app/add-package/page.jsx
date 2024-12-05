'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const AddPackage = () => {

  const addpackageForm = useFormik({
    initialValues: {
      title: '',
      packageName: '',
      version: '',
      difficulty: '',
      downloads: '',
      publishedBy: '',
      lastPublished: '',
      link: '',
      createdAt: '',
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/package/add', values)
      .then((result) => {
        toast.success('Package added successfully');
        router.push('/view-package');
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || 'Some error occured');
      });
      
    },

  });

  return (
    <div className='max-w-xl mx-auto'>
      <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700'>
        <div className='p-4'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              Add-package
            </h1>
          </div>
          <div className='mt-8'>
            <form>
              <div className='grid gap-y-4'>
                <div>
                  <label
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
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
                    htmlFor="title"
                    className='block text-sm mb-2 dark:text-white'>
                    Created At
                  </label>
                  <input
                    type="text"
                    className='border py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  />
                </div>
                <button
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPackage;