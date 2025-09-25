import Apply from "./Pages/Apply.jsx"
import ComingSoon from "./Pages/ComingSoon.jsx"
import {HashRouter, Link, Routes, Route} from "react-router-dom"
import './components/SparkleCursor.css';
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          <Route path="/apply" element={<Apply/>}/>
        </Routes>
      </HashRouter>
      
    </>
  )
}
