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
import Step2 from "./pages/intro/step2.jsx";
import Step3 from "./pages/intro/step3.jsx";
import Step4 from "./pages/intro/step4.jsx";
import Step5 from "./pages/intro/step5.jsx";

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
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
      </Routes>
      <BtmNav />
    </div>
  );
}

export default App;
