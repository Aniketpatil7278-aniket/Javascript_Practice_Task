
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Calculator from "./Pages/Calculator"
import AgeCalculator from "./Pages/AgeCalculator"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="/AgeCalculator" element={<AgeCalculator />} />
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
