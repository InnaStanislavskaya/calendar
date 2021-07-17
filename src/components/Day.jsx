import { Link } from 'react-router-dom';
import { NotesContext } from '../tools/notesProvider';
import { useContext } from 'react';
import { getDateId } from '../tools/dateTools';

export const Day = ({ day, month, year }) => {
    const notes = useContext(NotesContext);
    
    const today = new Date();
    const isToday = today.getFullYear() === Number(year) &&
        today.getMonth() === Number(month - 1) &&
        today.getDate() === Number(day);
    
    let note = '';
    try {
        const date = getDateId(year, month, day);
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