import React from "react";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Services />
    </div>
  );
}

export default App;
