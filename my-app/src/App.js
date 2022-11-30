import React from "react";
import BtmNav from "./components/btm-nav/btmNav";
import "./app.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Frontpage from "./pages/frontpage/frontpage";
import StartIntro from "./pages/start-intro/start-intro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartIntro />} />
        <Route path="/Frontpage" element={<Frontpage />} />
      </Routes>
      <BtmNav />
    </div>
  );
}

export default App;
