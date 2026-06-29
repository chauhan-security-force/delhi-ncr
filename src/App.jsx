import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import Industries from "./components/Industries";
import FloatingButtons from "./components/FloatingButtons";
import Contact from "./components/Contact";

function App() {
  return (
    <>
 <Navbar />
<Hero />
<Stats />
<WhyChoose />
<Services />
<About  />
      <Industries />
      <FloatingButtons />
        <Contact />


    </>
  );
}

export default App;