import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricePage from "./pages/PricePage";
import AppWrapper from "./components/AppWrapper.JSX";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="waitlist" element={<PricePage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

