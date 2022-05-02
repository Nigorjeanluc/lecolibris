import React from 'react'
import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import MainPage from '../../Pages/MainPage';
import NotreEcole from '../../Pages/NotreEcole';
import Enseignement from '../../Pages/Enseignement';

import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/notre-ecole" element={<NotreEcole />} />
        <Route path="/enseignement" element={<Enseignement />} />
        <Route path="/vie-scolaire" element={<Enseignement />} />
        <Route path="/inscription" element={<Enseignement />} />
        <Route path="/contact" element={<Enseignement />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes