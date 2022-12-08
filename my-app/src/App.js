import React from "react";
import BtmNav from "./components/btm-nav/btmNav";
import "./app.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Frontpage from "./pages/frontpage/frontpage";
import StartIntro from "./pages/start-intro/start-intro";
import Qr from "./pages/qr/qr";
import Map from "./pages/map/map";
import Story from "./pages/Story/Story.jsx";
import Home from "./pages/home/Home.jsx";
import Step1 from "./pages/intro/step1.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartIntro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Frontpage" element={<Frontpage />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Qr" element={<Qr />} />
        <Route path="/story" element={<Story />} />
        <Route path="/step1" element={<Step1 />} />
      </Routes>
      <BtmNav />
    </div>
  );
}

export default App;
