import React, { useEffect } from 'react'
import "./App.css"
import Header from './Component/Header';
import Blogs from './Component/Blogs';
import Footer from './Component/Footer';
import { AppContext } from './Component/Context/AppContext';
import { useContext } from 'react';

function App() {

  const {fetchBlogPost} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  },[])

  return (
    <div className=' w-full h-screen flex flex-col gap-y-5'>
        <Header/>
        <Blogs/>
        <Footer/>
    </div>
  );
}

export default App
