import './App.css';

function App() {

  const name = 'Rudy Billar';

  const handleClick = () => {
    alert("This is a JavaScript alert in React");
  };
  return (
    <div className="App">
      <header className="App-header">
        {name}

        <button onClick={handleClick}>Show Alert </button>
        
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <a href="{alert('all good!');}">click me</a>
        <p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
