import { Day } from './Day';

export const Month = ({ year, month }) => {
    const monthDate = new Date(year, month - 1);
    const monthName =  monthDate
    .toLocaleString('default', { month: 'long' });
    
    const days = Array(31).fill().map((x, index) => ({
        label: String(index + 1),
    }));

    const daysOfWeek = [
        { label: 'Mon' },
        { label: 'Tue' },
        { label: 'Wed' },
        { label: 'Thu' },
        { label: 'Fri' },
        { label: 'Sat' },
        { label: 'Sun' },
    ];

    for (let i = monthDate.getDay() - 1; i > 0; i = i - 1) {
        daysOfWeek.push({ label: ''})
    }

    days.unshift(...daysOfWeek);
    
    return (
        <div className ='month'>
            <div className='month-name'>{monthName}</div>
            <div className='dayList'>
                {days.map((day, index) => <Day key={index} day={day.label}/>)}
            </div>
        </div>
    );

}