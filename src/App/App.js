import { Route, Switch, useHistory } from 'react-router';
import { Year } from '../components/Year';
import './App.css';


export function App() {
  const history = useHistory();

  const handleYearChange = (newValue) => {
    history.push(`/year/${newValue}`);
  }
  
  return (
    <div className="App">
      <Switch>
        <Route path="/year/:yearNumber" render={(props) => (
          <Year year ={props.match.params.yearNumber} onYearChange={handleYearChange}></Year>
        )}/>
      </Switch>
    </div>
  );
}


