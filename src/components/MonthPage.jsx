import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { Month } from './Month';
import { createLongMonthNames } from '../tools/dateTools';

const monthNames = createLongMonthNames();

export const MonthPage = (props) => {
    const handleMonthChange = (event) => {
        history.push(`/year/${props.year}/month/${event.target.value}`);
    }

    const history = useHistory();
    return (
        <>
            <Link to="">Back</Link>
            <select onChange={handleMonthChange} value={props.month}>
                {monthNames.map((month, index) => (
                    <option value={index + 1}>{month}</option>
                ))}
            </select>
            <Month {...props}/>
        </>
    )
}