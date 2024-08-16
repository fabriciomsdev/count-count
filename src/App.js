import logo from './logo.svg';
import './App.css';
import CounterButton from "./Button";

function App() {
  const appStyles = {
    backgroundColor:"white",
    width: "100%",
    height: "1000px",
    display: "block"
  }

  return (
    <div className="App" style={appStyles}>
      <header className="App-header">
        <CounterButton initialCount={0} />
      </header>
    </div>
  );
}

export default App;
