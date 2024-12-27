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
              <label>Title</label>
              <input type="text" />
            </div>
            <div>
              <label>Package Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Version</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Published</label>
              <input type="text" />
            </div>
            <div>
              <label>Difficulty</label>
              <input type="text" />
            </div>
            <div>
              <label>Downloads</label>
              <input type="text" />
            </div>
            <div>
              <label>Published By</label>
              <input type="text" />
            </div>
            <div>
              <label>Link</label>
              <input type="text" />
            </div>
            <div>
              <label>Created At</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages