
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./Pages/Calculator";
import AgeCalculator from "./Pages/AgeCalculator";
import TempCoverter from "./Pages/TempConverter";
import Hosting from "./Pages/Hosting";
import ObjectDestructuring from "./Pages/ObjectDestructuring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="/age-cal" element={<AgeCalculator />} />
        <Route path="/temp-cal" element={<TempCoverter />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/objects" element={<ObjectDestructuring />} />
      </Routes>

    </BrowserRouter>

  
  )
}

export default App
