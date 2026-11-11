
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Services />
          <Projects /> 
           <Contact /> 
      </main>
       <Footer />
    </>
  );
}

export default App;
