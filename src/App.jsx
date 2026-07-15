
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./Pages/Calculator";
import AgeCalculator from "./Pages/AgeCalculator";
import TempCoverter from "./Pages/TempConverter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="/age-cal" element={<AgeCalculator />} />
        <Route path="/temp-cal" element={<TempCoverter />} />
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
