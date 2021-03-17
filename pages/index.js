import React from "react";

import TopBar from "../components/topbar";
import Hero from "../components/hero";
import Landing from "../components/landing";
import Footer from "../components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Hero />
      <Landing />
      <Footer />
    </div>
  );
};

export default Index;
