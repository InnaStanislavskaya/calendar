import { Redirect, Route, Switch, useHistory } from 'react-router';
import { MonthPage } from '../components';
import { DayPage } from '../components';
import { Year } from '../components/Year';
import './App.css';
import { useEffect, useState} from 'react';
import { NotesContext } from '../tools/notesProvider';


export function App() {
  const history = useHistory();

  const [notes, setNotes] = useState({ 
    '2021-08-01': 'Hello',
  });

  // useEffect(() => console.log('Effect called'), [notes]);

  const handleYearChange = (newValue) => {
    history.push(`/year/${newValue}`);
  }
  
  return (
    <NotesContext.Provider value={notes}>
      <div className="App">
        <Switch>
          <Route path="/year/:year/month/:month/day/:day" render={({ match }) => (
            <DayPage {...match.params}/>
          )}/>

          <Route path="/year/:yearNumber/month/:monthNumber" render={(props) => (
            <MonthPage year ={Number(props.match.params.yearNumber)} month={Number(props.match.params.monthNumber)}></MonthPage>
          )}/>

          <Route path="/year/:yearNumber" render={(props) => (
            <Year year ={props.match.params.yearNumber} onYearChange={handleYearChange}></Year>
          )}/>

          <Route path="/today">  
            <Redirect to={`/year/${new Date().getFullYear()}/month/${new Date().getMonth() + 1}/day/${new Date().getDate()}`}></Redirect>
          </Route>

          <Route path="/">
            <Redirect to={`/year/${new Date().getFullYear()}`}></Redirect>
          </Route>
        </Switch>
      </div>
    </NotesContext.Provider>
  );
}


