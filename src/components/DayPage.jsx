import { useState, useContext } from 'react';
import { NotesContext } from '../tools/notesProvider';
import { getDateId } from '../tools/dateTools';
import { notesManager } from '../model/notesManager';

export const DayPage = (props) => {
    const date = new Date(props.year, props.month - 1, props.day);
    const notes = useContext(NotesContext);
    const note = notes[getDateId(props.year, props.month, props.day)];
    const [memo, setMemo] = useState(note);

    const dataLable = date.toLocaleDateString();

    const handleChangeMemo = ({ target: { value } }) => {
        setMemo(value);
    }

    const handleSaveClick = () => {
        const dateId = getDateId(props.year, props.month, props.day);
        notesManager.updateNote(dateId, memo)
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