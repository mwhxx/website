// src/main.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Preloader from "./Preloader.jsx"; // make sure Preloader.jsx is in src/

// your main pages
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Works from "./pages/works.jsx";
import Exhibit from "./pages/exhibit.jsx";

// all your individual work pages
import RedAndWhite from "./pages/aw_redandwhite.jsx";
import LiverGuardian from "./pages/aw_liverguardian.jsx";
import Encage from "./pages/aw_encage.jsx";
import ElectronicPracticalLab from "./pages/aw_plab.jsx";
import LostInTheLife from "./pages/aw_lostinthelife.jsx";
import AdaptiveWorld from "./pages/aw_adaptiveworld.jsx";
import Karma from "./pages/aw_karma.jsx";
import RoboticHeart from "./pages/aw_roboticheart.jsx";
import WhiteEchoes from "./pages/aw_whiteechoes.jsx";
import PoisedPerfection from "./pages/aw_poisedperfection.jsx";
import NamShanEstate from "./pages/aw_namshanestate.jsx";
import Cmc from "./pages/aw_cmc.jsx";
import WoodLogCake from "./pages/aw_woodlogcake.jsx";
import EvilQueen from "./pages/aw_evilqueen.jsx";
import Neuroblocks from "./pages/aw_neuroblocks.jsx";
import Aims from "./pages/aw_aims.jsx";
import Mappm from "./pages/aw_mappm.jsx";
import PhantomRabbit from "./pages/aw_phantomrabbit.jsx";
import CubeRangers from "./pages/aw_cuberangers.jsx";
import VoicesWithin from "./pages/aw_voiceswithin.jsx";
import Amdusuas from "./pages/aw_amdusuas.jsx";
import VeiledTrading from "./pages/aw_veiledtrading.jsx";
import Metalwireman from "./pages/aw_metalwireman.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      {/* Wrap your router in Preloader so the loading screen runs once */}
      <Preloader>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/exhibit" element={<Exhibit />} />

          {/* Work project routes */}
          <Route path="/works/aw_redandwhite" element={<RedAndWhite />} />
          <Route path="/works/aw_liverguardian" element={<LiverGuardian />} />
          <Route path="/works/aw_encage" element={<Encage />} />
          <Route path="/works/aw_plab" element={<ElectronicPracticalLab />} />
          <Route path="/works/aw_lostinthelife" element={<LostInTheLife />} />
          <Route path="/works/aw_adaptiveworld" element={<AdaptiveWorld />} />
          <Route path="/works/aw_karma" element={<Karma />} />
          <Route path="/works/aw_roboticheart" element={<RoboticHeart />} />
          <Route path="/works/aw_whiteechoes" element={<WhiteEchoes />} />
          <Route
            path="/works/aw_poisedperfection"
            element={<PoisedPerfection />}
          />
          <Route path="/works/aw_namshanestate" element={<NamShanEstate />} />
          <Route path="/works/aw_cmc" element={<Cmc />} />
          <Route path="/works/aw_woodlogcake" element={<WoodLogCake />} />
          <Route path="/works/aw_evilqueen" element={<EvilQueen />} />
          <Route path="/works/aw_neuroblocks" element={<Neuroblocks />} />
          <Route path="/works/aw_aims" element={<Aims />} />
          <Route path="/works/aw_mappm" element={<Mappm />} />
          <Route path="/works/aw_phantomrabbit" element={<PhantomRabbit />} />
          <Route path="/works/aw_cuberangers" element={<CubeRangers />} />
          <Route path="/works/aw_voiceswithin" element={<VoicesWithin />} />
          <Route path="/works/aw_amdusuas" element={<Amdusuas />} />
          <Route path="/works/aw_veiledtrading" element={<VeiledTrading />} />
          <Route path="/works/aw_metalwireman" element={<Metalwireman />} />
        </Routes>
      </Preloader>
    </HashRouter>
  </StrictMode>
);
