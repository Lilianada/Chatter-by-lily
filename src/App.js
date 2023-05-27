import React from 'react';
import Header from './components/unauthorized/Header';
import Hero from './components/unauthorized/Hero';
import FeaturedPosts from './components/unauthorized/FeaturePosts';
import Sidebar from './components/unauthorized/Sidebar';
import CallToAction from './components/unauthorized/CTA';
import Communities from './components/unauthorized/Communities';
import Footer from './components/unauthorized/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <div className='body__grid'>
        <FeaturedPosts/>
        <Sidebar />
      </div>
      <Communities/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
