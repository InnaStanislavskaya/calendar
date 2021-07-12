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