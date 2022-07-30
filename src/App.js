import './App.css';
import Meals from './component/Meals/Meals';
import Navbar from './component/Navbar/Navbar';
import Question from './component/Question/Question';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Meals></Meals>
      <Question></Question>
    </div>
  );
}

export default App;
