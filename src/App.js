import './App.css';
import Experience from './Components/Experience';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div
        data-aos="fade-up"
      >
        <Services></Services>
      </div>
      <Experience></Experience>
      <Feature></Feature>
      <Faq></Faq>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
