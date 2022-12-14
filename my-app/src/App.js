import React from "react";
import BtmNav from "./components/btm-nav/btmNav";
import "./app.css";
import "./pages/Story/StoryStyle.css";
import { Route, Routes } from "react-router-dom";

// Pages

import StartIntro from "./pages/start-intro/start-intro";
import Qr from "./pages/qr/qr";
import Map from "./pages/map/map";
import Story from "./pages/Story/Story.jsx";
import Home from "./pages/home/Home.jsx";
// import Topnav from "./components/top-nav/topnav";
import Step0 from "./pages/intro/step0.jsx";
import Step1 from "./pages/intro/step1.jsx";
import Step2 from "./pages/intro/step2.jsx";
import Step3 from "./pages/intro/step3.jsx";
import Step4 from "./pages/intro/step4.jsx";
import Step5 from "./pages/intro/step5.jsx";
import Livshistorie from "./pages/Story/OpenStory.jsx";

import NameStory from "./pages/Story/OpenArticle";

import NameTest from "./pages/Story/Article_Display";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartIntro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Qr" element={<Qr />} />

        <Route path="/qr/:Navn" element={<NameStory />} />

        <Route path="/Qr/TESTER" element={<NameTest />} />

        <Route path="/story" element={<Story />} />
        <Route path="/step0" element={<Step0 />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />

        <Route path="/Livshistorie/:Name" element={<Livshistorie />} />
      </Routes>
      {/* <Topnav /> */}
      <BtmNav />
    </div>
  );
}

export default App;
