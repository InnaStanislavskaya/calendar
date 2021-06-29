import {useState} from 'react';
import { Year } from '../components/Year';
import './App.css';

export function App() {
  const [currentYear, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (newValue) => {
    setYear(newValue);
  }
  
  return (
    <div className="App">
      <Year year ={currentYear} onYearChange={handleYearChange}></Year>
    </div>
  );
}


