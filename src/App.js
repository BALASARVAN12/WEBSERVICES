import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Ourwork from '../src/Components/Ourwork';
import Services from '../src/Components/Services';
import Contact from '../src/Components/Contact';
import Footer from './Components/Footer';
import Thankyou from "../src/Components/Thankyou";
import Headroom from 'react-headroom';
function App() {
  return (
    <div className="App">
      <Headroom>
    <Navbar/>
    </Headroom>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Ourwork' element={<Ourwork/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contactus' element={<Contact/>}/>
      <Route path='/Thankyou' element={<Thankyou/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
