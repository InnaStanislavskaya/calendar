import { useState, useContext } from 'react';
import { NotesContext } from '../tools/notesProvider';

export const DayPage = (props) => {
    const date = new Date(props.year, props.month - 1, props.day);
    const notes = useContext(NotesContext);
    const note = notes[date.toISOString().substring(0, 10)];
    const [memo, setMemo] = useState( note);

    const dataLable = date.toLocaleDateString();

    const handleChangeMemo = ({ target: { value } }) => {
        setMemo(value);
    }

    const handleSaveClick = () => {
        console.log('save');
    }

    return (
        <div>
            <div>{dataLable}</div>
            <textarea onChange={handleChangeMemo} value={memo}></textarea>
            <button onClick={handleSaveClick}>SAVE</button>
        </div>
    );
}