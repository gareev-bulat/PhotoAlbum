import axios from "axios";
import PinCard from "../components/pinCard";
import { useEffect, useState } from "react";
import Home from "./screens/home";
import PrimaryView from './screens/primaryView';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo" element={<PrimaryView />} />
    </Routes>
  )
}

export default App;