import React from "react";
import Cta from "./components/cta/Cta";
import Design from "./components/Design";
import Infrastructure from "./components/Infrastructure";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-overpass">
      <Cta />
      <Design />
      <Infrastructure />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
