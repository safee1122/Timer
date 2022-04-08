import React from "react";
import "./App.css";
import Header from "./components/header";
import Timer from "./components/timer";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
