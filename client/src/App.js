import logo from './logo.svg';
import './App.css';

function startGame(){

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tales From the Algorithm
        </h1>
        <div id="startBtn">
          <button onClick={startGame()}>
            Start
          </button>
        </div>
        <div id="genre-dropdown">
          <label>What genre would you like your story to be?</label>
          <select>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div id="character-name">
          <label>Who would you like to be the main character of your story?</label>
          <select>
            <option value="shenron">Shenron</option>
            <option value="miso">Miso</option>
            <option value="nugget">Nugget</option>
          </select>
        </div>
        <div id="character-type">
          <label>What is your character's background?</label>
          <select>
            <option value="chef">Chef</option>
            <option value="assassin">Assassin</option>
            <option value="student">Student</option>
          </select>
        </div>
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
  );
}

export default App;
