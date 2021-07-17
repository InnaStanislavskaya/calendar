export const createLongMonthNames = () => {
    const months = new Array(12)
        .fill()
        .map((item, index) => {
            const monthDate = new Date(2000, index);
            const monthName =  monthDate.toLocaleDateString('default', { month: 'long' });
        return monthName;
    });
    return months;
} 
export const getDateId = (year, month, day) => {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}