import background from "./Images/Background.png"
import './App.css';
import MainHome from "./Components/Home/Home.js"

function App() {
  return (
    <div className="App background" style={{ backgroundImage: `url(${background})`}}>
      <MainHome />
    </div>
  );
}

export default App;
