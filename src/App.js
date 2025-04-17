import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Ingred from './Pages/Ingrediants';
import Paralex from './Pages/Paralex';
import ExploreFood from './Pages/Explore';
import Reviews from './Pages/Reviews';
import Questions from './Pages/Questions';
import Scroll from './Pages/Scroll';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div  >
       <Header/>
       <Home/>
       <About/>
       <Ingred/>
       <Paralex/>
       <ExploreFood/>
       <Reviews/>
       <Questions/>
       <Scroll/>
       <Footer/>
    </div>
  );
}

export default App;
