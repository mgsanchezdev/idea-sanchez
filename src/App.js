import logo from './image/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.coderhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
