// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ApartmentDetail from './pages/ApartmentDetail';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            Real Estate Listings
          </Link>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
        </Routes>
      </main>
    </>
  );
}
