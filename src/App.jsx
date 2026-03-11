import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home2.jsx"
import FAQ from "./pages/Faq"
import About from "./pages/About"
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App