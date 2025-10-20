import Apply from "./Pages/Apply/sections/Apply.jsx"
import ComingSoon from "./Pages/ComingSoon/ComingSoon.jsx"
import Links from "./Pages/Links/Links.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';
import '@/components/SparkleCursor.css';
import "./App.css";

function App() {
   
  window.reloadOnce = window.reloadOnce || false;                                             
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          <Route path="/apply" element={<Apply/>}/>
          <Route path="/links" element={<Links/>}/>
        </Routes>
      </BrowserRouter>
      <Analytics mode="production" />
    </>
  );
}

export default App;
