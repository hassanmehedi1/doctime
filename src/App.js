import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}

export default App;
