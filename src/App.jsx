import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home2.jsx"
import FAQ from "./pages/Faq"
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App