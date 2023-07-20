import React from "react";
import { FeatureSection, Footer, HeroSection } from "./components";
import Navbar from "../../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default HomePage;
