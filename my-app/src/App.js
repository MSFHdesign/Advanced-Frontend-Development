import React from "react";
import BtmNav from "./components/btm-nav/btmNav";
import "./app.css";
import "./pages/Story/StoryStyle.css";
import { Route, Routes } from "react-router-dom";

// Pages

// import StartIntro from "./pages/start-intro/start-intro";
import Qr from "./pages/qr/qr";
import Map from "./pages/map/map";
import Story from "./pages/Story/Story.jsx";
import Home from "./pages/home/Home.jsx";
// import Topnav from "./components/top-nav/topnav";
import Livshistorie from "./pages/Story/OpenStory.jsx";

import NameStory from "./pages/Story/OpenArticle";
import TopNav from "./components/top-nav/topnav";
import NameTest from "./pages/Story/Article_Display";

function App() {
  return (
    <div className="App">
       <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Qr" element={<Qr />} />

        <Route path="/qr/:Navn" element={<NameStory />} />

        <Route path="/Qr/TESTER" element={<NameTest />} />

        <Route path="/story" element={<Story />} />

        <Route path="/Livshistorie/:Name" element={<Livshistorie />} />
      </Routes>
    
      <BtmNav />
    </div>
  );
}

export default App;
