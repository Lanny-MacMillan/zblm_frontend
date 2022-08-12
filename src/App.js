import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router";
import Admin from './components/Admin'
import Home from './components/Home'
import Shows from './components/Shows'
import About from './components/About'
import Music from './components/Music'
import Gallery from './components/Gallery'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='Admin' element={<Admin />} /> 
      <Route path='Shows' element={<Shows />} />
      <Route path='About' element={<About />} />
      <Route path='Music' element={<Music />} />
      <Route path='Gallery' element={<Gallery />} />
    </Routes>
    </>
  );
}

export default App;
