import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accordion from './components/accordion'
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import Index from './components';
import Movies from './components/Movies';
import Movie from './components/Movie';
import GalleryPage from './components/GallaryPage';
import ToasterPage from './components/ToasterPage';

function App() {
  return (
    <div className="App">
   {/* <Accordion /> */}

<Routes>
  <Route path='/' element={<Index />} />
  <Route path='/home' element={<HomePage />} />
  <Route path='/accordion' element={<Accordion />} />
  <Route path='/about' element={<AboutPage />} />
  <Route path='/movies' element={<Movies />} />
  <Route path='/movie/:id' element={<Movie />} />
  <Route path='/gallery' element={<GalleryPage />} />
  <Route path='toaster' element={<ToasterPage/>} />
</Routes>


   
    </div>
  );
}

export default App;
