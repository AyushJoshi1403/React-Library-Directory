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
      <h1>List of Packages</h1>
      <h2>all packages listed</h2>
    </div>
  )
}

export default Packages