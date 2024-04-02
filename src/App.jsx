import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="waitlist" element={<PricePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

