import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/Landing";
import Resume from './components/Resume';


export default function App() {
  
  
  return (
    <Routes>
      <Route>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/resume' element={<Resume/>}/>
       </Route>
    </Routes>
  );
}
