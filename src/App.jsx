import ComingSoon from "./ComingSoon";
import Other from "./Other";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <>
     <HashRouter>
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/other" element={<Other />} />
          </Routes>
      </HashRouter>
    </>
  )
}
