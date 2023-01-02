import logo from './logo.svg';
import './App.css';
import yellow from './img/image-yellow.png'
import aqua from './img/image-aqua.png'
import rose from './img/image-rose.png'
import steel from './img/image-steel.png'
import arrow from './img/arrow.png'


function App() {
  return (
    <div className="App">
      
      <h2> Popular Products</h2>
      <hr></hr>
      {/* yellow */}
      <div className="main">
        <img src={yellow} className="mainImg"/>
      
        <div className="right">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h4>55</h4>
          </div>
          <a className="App-link" href="#">Haught or Naught</a>
          <p>High-minded or absent-minded? You decide.</p>
          <div className="bottom">
            Submitted by : <img src={logo} className="App-logo" alt="logo" />
          </div>
         </div>
      </div>
      {/* aqua  */}
      <div className="main">
        <img src={aqua} className="mainImg"/>
      
        <div className="right">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h4>44</h4>
          </div>
          <a className="App-link" href="#">Yellow Pail</a>
          <p>On-demand sand castle construction expertise.</p>
          <div className="bottom">
            Submitted by : <img src={logo} className="App-logo" alt="logo" />
          </div>
         </div>
      </div>

       {/* steel */}
       <div className="main">
        <img src={steel} className="mainImg"/>
      
        <div className="right">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h4>42</h4>
          </div>
          <a className="App-link" href="#">Tinfoild: Tailored tinfoil hats</a>
          <p>We already have your measurements and shipping address</p>
          <div className="bottom">
            Submitted by : <img src={logo} className="App-logo" alt="logo" />
          </div>
         </div>
      </div>
      
      {/* rose */}
      <div className="main">
        <img src={rose} className="mainImg"/>
      
        <div className="right">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h4>23</h4>
          </div>
          <a className="App-link" href="#">Supermajority: The Fantasy Congress League</a>
          <p>Earn points when your favorite policticians pass legislation.</p>
          <div className="bottom">
            Submitted by : <img src={logo} className="App-logo" alt="logo" />
          </div>
         </div>
      </div>
     







    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */