import React from 'react'
import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import MainPage from '../MainPage';

import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes