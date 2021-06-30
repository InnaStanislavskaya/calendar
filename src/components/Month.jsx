import { Link } from 'react-router-dom';
import { Day } from './Day';

const DAYS_IN_WEEK = 7;

function createDayOfWeekNames() {
    const zeroDay = new Date();
    const firstDayOfWeekDate = zeroDay.getDate() - zeroDay.getDay();
    zeroDay.setDate(firstDayOfWeekDate);

    const daysOfWeek = [];
    
    for(let i = 0; i < DAYS_IN_WEEK; i = i + 1) {
        const dayText = zeroDay.toLocaleDateString('default', { weekday: 'short' });
        daysOfWeek.push({ label: dayText });
        zeroDay.setDate(zeroDay.getDate() + 1);
    }

    return daysOfWeek;
}

export const Month = ({ year, month }) => {
    const monthDate = new Date(year, month - 1);
    const monthName =  monthDate.toLocaleDateString('default', { month: 'long' });

    const daysOfWeek = createDayOfWeekNames();
    
    const days = [];

    while (monthDate.getMonth() === month - 1) {
        days.push({ label: monthDate.getDate() });
        monthDate.setDate(monthDate.getDate() + 1);
    }

    for (let i = new Date(year, month - 1).getDay(); i > 0; i = i - 1) {
        days.unshift({ label: ''});
    }

    days.unshift(...daysOfWeek);
    
    return (
        <div className ='month'>
            <Link to={`/year/${year}/month/${month}`}>
                <div className='month-name'>{monthName}</div>
            </Link>
            <div className='dayList'>
                {days.map((day, index) => <Day key={index} day={day.label}/>)}
            </div>
        </div>
    );

}