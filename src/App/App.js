import { Redirect, Route, Switch, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Month } from '../components';
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
        <Route path="/year/:yearNumber/month/:monthNumber" render={(props) => (
          <>  
            <Link to="">Back</Link>
            <Month year ={Number(props.match.params.yearNumber)} month={Number(props.match.params.monthNumber)}></Month>
          </>
        )}/>

        <Route path="/year/:yearNumber" render={(props) => (
          <Year year ={props.match.params.yearNumber} onYearChange={handleYearChange}></Year>
        )}/>

        <Route path="/">
          <Redirect to={`/year/${new Date().getFullYear()}`}></Redirect>
        </Route>
      </Switch>
    </div>
  );
}


