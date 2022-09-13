import './App.css';
import Experience from './Components/Experience';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Experience></Experience>
      <Feature></Feature>
      <Faq></Faq>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
