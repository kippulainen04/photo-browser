import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>  
        <Navigation />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Home