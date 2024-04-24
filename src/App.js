import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/container/navbar";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NextTopLoader from "nextjs-toploader";
import ConvertPDFTOTXT from "./pages/ConvertPDFTOTXT";
import ConvertPDFTOWORD from "./pages/ConvertPDFTOWORD";

function App() {
  return (
    <Router>
      <NextTopLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/converttotxt" element={<ConvertPDFTOTXT/>}/>
        <Route path="/converttodoc" element={<ConvertPDFTOWORD/>}/>
        <Route path="*" element={<Page404 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
