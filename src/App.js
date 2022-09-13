import './App.css';
import Experience from './Components/Experience';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
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
    </div>
  );
}

export default App;
