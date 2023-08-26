import './App.css';
// import { BrowserRouter, Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Productlisting from './Components/Productlisting';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    // <BrowserRouter>
       
    //     <Route exact path="/" component={<Hero/>} />
    //     <Route path="/productlisting" component={Productlisting} />
    //     <Route path="/contact" component={Contact} />
    //     <Footer />
    // </BrowserRouter>
    <div className="scroll-smooth">
      <Hero />
      <Productlisting />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
