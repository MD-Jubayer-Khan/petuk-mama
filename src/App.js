import './App.css';
import Meals from './component/Meals/Meals';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Meals></Meals>
    </div>
  );
}

export default App;
