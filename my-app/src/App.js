import React from "react";
import BtmNav from "./components/btm-nav/btmNav";
import "./app.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Frontpage from "./pages/frontpage/frontpage";
import StartIntro from "./pages/start-intro/start-intro";
import Qr from "./pages/qr/qr";
import Map from "./pages/map/map";
import Story from './pages/Story/Story.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartIntro />} />
        <Route path="/Frontpage" element={<Frontpage />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Qr" element={<Qr />} />
        <Route path="/story" element={<Story />} />
      </Routes>
      <BtmNav />
    </div>
  );
}

export default App;
