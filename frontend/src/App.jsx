import axios from "axios";
import PinCard from "../components/pinCard";
import { useEffect, useState } from "react";
import Home from "./screens/home";
import PrimaryView from './screens/primaryView';
import { Routes, Route, useLocation } from "react-router-dom";
import SubmitForm from "./screens/SubmitForm";


function App() {
  const location = useLocation();

  const background = location.state && location.state.background;

  return (
    <>
    <Routes location={background || location}>
      <Route path="/" element={<Home />} />
      <Route path="/photo" element={<PrimaryView />} />
      <Route path="/form" element={<Home />} />
    </Routes>

    {background && (
      <Routes>
        <Route path="/form" element={<SubmitForm />}/>
      </Routes>
    )}
  
  </>
  )
}

export default App;