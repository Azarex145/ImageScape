import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageList />
      <Footer />
    </div>
  );
}

export default App;
