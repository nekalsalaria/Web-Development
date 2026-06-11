import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navabar from "./components/Navabar";

const App = () => {
  return (
    
    <BrowserRouter>
    <Navabar/>
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App