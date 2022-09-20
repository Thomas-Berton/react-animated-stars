import logo from './logo.svg';
import './App.css';

import GalaxyBackground from './GalaxyBackground/GalaxyBackground'

function App() {
  return (
    <GalaxyBackground starCount={500} rotationSpeed={.2}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GalaxyBackground>
  );
}

export default App;
