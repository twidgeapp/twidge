import Index from "./pages";
import Home from "./pages/home";
import { Route, Routes } from "@twidge/core/router";

function App() {
  return (
    <div className="w-screen h-screen bg-white rounded-md">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
