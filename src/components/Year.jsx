import { Month } from './Month';
import { useHistory } from 'react-router';

/** @type {import('React').FunctionComponent} */
export const Year = (props) => {

    const { year, onYearChange } = props;

    const history = useHistory();

    const month = new Array(12)
        .fill()
        .map((item, index) => index + 1);

    const handleYearChange = (event) => {
        history.push(`/year/${event.target.value}`);
    }

    return (
        <>
            <div className = 'year'>
                <button onClick={() => onYearChange(Number(year) - 1)}>prev</button>
                <input type="number" value={Number(year)} onChange={handleYearChange}/>
                <button onClick={() => onYearChange(Number(year) + 1)}>next</button>
            </div>

            <div className ='month-list'>
                {month.map(monthNumber => {
                    return <Month key= {String(monthNumber)} year={Number(year)} month ={monthNumber}/>
                })
                }
            </div>
        </>
    );
}