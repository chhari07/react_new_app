import Header from './components/header/Header';
import './App.css';
import {BrowserRouter as Router,
//  Switch,
//   Route,
  
} from "react-router-dom";
import homepage from './components/home/homepage';




function App() {
  return (
    <div className="App">
         <Router>
          <Header />
          <switch>
            <Router path='about' Component={homepage} />
             
          </switch>
         </Router>
    </div>
  );
}

export default App;
