import Apply from "./Apply.jsx"
import Home from "./Home.jsx"
import {HashRouter, Link, Routes, Route} from "react-router-dom"
import './components/SparkleCursor.css';
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Apply/>}/>
          <Route path="/coming-soon" element={<Home/>}/>
        </Routes>
      </HashRouter>
      
    </>
  );
}

export default App;
