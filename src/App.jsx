import Apply from "./Pages/Apply/sections/Apply.jsx"
import ComingSoon from "./Pages/ComingSoon/ComingSoon.jsx"
import Links from "./Pages/Links/Links.jsx"
import Main from "./Pages/Main/Main.jsx"
import Primer from "./Pages/Primer/Primer.jsx"
import Catalog from "./Pages/Catalog/page.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@/components/ScrollToTop';
import '@/components/SparkleCursor.css';
import "./App.css";

function App() {
   
  window.reloadOnce = window.reloadOnce || false;                                             



  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/primer" element={<Primer/>}/>
          <Route path="/apply" element={<Apply/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
        </Routes>
      </BrowserRouter>
      <Analytics mode="production" />
    </>
  );
}

export default App;
