import './App.css';
import GridMUI from './components/gridMUI';
import { SwiperUI } from './components/swiperUI';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import CustomSwiper from './components/customSwiper';

function App() {
  return (
    <div className="App">
      <GridMUI />
      {/* <SwiperUI /> */}
      <CustomSwiper />

    </div>
  );
}

export default App;
