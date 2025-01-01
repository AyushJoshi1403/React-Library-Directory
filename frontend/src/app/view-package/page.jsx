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
    <div className=''>
      <div className='container mx-auto py-10'>
        <h1 className='text-center text-2xl font-bold'>List of Packages</h1>
        <table className='w-full '>
          <thead>
            <tr className='bg-gray-600 text-white font-bold'>
              <th className='p-3'>ID</th>
              <th className='p-3'>Title</th>
              <th className='p-3'>Package Name</th>
              <th className='p-3'>Version</th>
              <th className='p-3'>Last Published</th>
              <th className='p-3'>Difficulty</th>
              <th className='p-3'>Downloads</th>
              <th className='p-3'>Published By</th>
              <th className='p-3'>Link</th>
              <th className='p-3'>Created At</th>
            </tr>
          </thead>
          <tbody>
            {
              packageList.map((packages) => {
                return (
                  <tr className='border bg-gray-200 text-black'>
                    <td className='p-3 text-center'>{packages._id}</td>
                    <td className='p-3 text-center'>{packages.title}</td>
                    <td className='p-3 text-center'>{packages.packageName}</td>
                    <td className='p-3 text-center'>{packages.version}</td>
                    <td className='p-3 text-center'>{packages.lastPublished}</td>
                    <td className='p-3 text-center'>{packages.difficulty}</td>
                    <td className='p-3 text-center'>{packages.downloads}</td>
                    <td className='p-3 text-center'>{packages.publishedBy}</td>
                    <td className='p-3 text-center'>{packages.link}</td>
                    <td className='p-3 text-center'>{new Date(packages.createdAt).toDateString()}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Packages