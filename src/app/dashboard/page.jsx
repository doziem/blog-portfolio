'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const session = useSession();
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isloading, setIsLoading] = useState(false);

  // useEffect (() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res?.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );
  console.log('Session:::', session);
  // console.log('data', data);
  return <div>Dashboard</div>;
};

export default Dashboard;
