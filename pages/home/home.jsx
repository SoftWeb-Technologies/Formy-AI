import React from "react";
import { Features, Footer, HeroSection } from "./components";
import Navbar from "../../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
