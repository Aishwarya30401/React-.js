import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <button id="click">click me</button>
      <button2 id="click">hii</button2>
      <form>
        <label class="name">
          <input type="text" placeholder="enter your name" size="10"></input>
        </label>
      </form>
    </div>
  
  );
}

export default App;
