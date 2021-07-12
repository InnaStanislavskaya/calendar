import { Link } from 'react-router-dom';
import { NotesContext } from '../tools/notesProvider';
import { useContext } from 'react';

export const Day = ({ day, month, year }) => {
    const notes = useContext(NotesContext);
    
    const today = new Date();
    const isToday = today.getFullYear() === Number(year) &&
        today.getMonth() === Number(month - 1) &&
        today.getDate() === Number(day);
    
    let note = '';
    try {
        const date = new Date(year, month - 1, day).toISOString().substring(0, 10);
        note = notes[date];
    } catch {}

    return (
        <div style={{ backgroundColor: isToday ? 'red' : 'transparent',
        border: note ? 'solid black 2px' : 'none',
        }}>
            {
                Number.isInteger(Number(day)) ? 
                    <Link to={`/year/${year}/month/${month}/day/${day}`}>
                        {day}
                    </Link> :
                    <div>
                        {day}
                    </div>
            }
        </div>
    );
}