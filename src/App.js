import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import Series from './Test/Series';
import Movies from './Test/Movies';
import Home from './Test/Home';
function App() {
  return (
    <div className="App">
  
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/series" component={Series}/>
      <Route exact path="/movies" component={Movies}/>
    </Switch>
    
    </Router>
    
    </div>
  );
}

export default App;
