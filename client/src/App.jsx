import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/UI/ScrollToTop'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './index.css'

// Lazy Loading Error Pages
const NotFound = lazy(() => import('./pages/errorpages/NotFound'));
const ServerError = lazy(() => import('./pages/errorpages/ServerError'));
const Forbidden = lazy(() => import('./pages/errorpages/Forbidden'));
const NetworkError = lazy(() => import('./pages/errorpages/NetworkError'));
const Maintenance = lazy(() => import('./pages/errorpages/Maintenance'));

function App() {
  return (
    <Router>
      <ScrollToTop  offset={80}/> {/* <-- Add this here */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
             {/* Error Pages Routes */}
                <Route 
                  path="/error/500" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <ServerError />
                    </Suspense>
                  } 
                />
                
                <Route 
                  path="/error/403" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Forbidden />
                    </Suspense>
                  } 
                />
                
                <Route 
                  path="/error/network" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <NetworkError />
                    </Suspense>
                  } 
                />
                
                <Route 
                  path="/maintenance" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Maintenance />
                    </Suspense>
                  } 
                />
                
                {/* 404 Catch-all Route */}
                <Route 
                  path="*" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <NotFound />
                    </Suspense>
                  } 
                />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
