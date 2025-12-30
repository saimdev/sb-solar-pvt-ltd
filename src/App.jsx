import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <Portfolio />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
