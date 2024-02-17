import React from 'react';
import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';
import "./HomePage.css";

export default function HomePage() {
  return (
    <div class="body">
      <Navbar />
      <HomeContent />
    </div>
  )
}
