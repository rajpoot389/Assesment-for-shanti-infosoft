import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import { useGlobalContext } from '../Warehouse/context';

const PopUpBox = () => {
    const dispatch = useGlobalContext().dispatch;
    const [noteData, setNoteData] = useState('');

    function addNote() {
        if (noteData == '')
            alert('Please Add Title');
        else {
            let note = { sNo: '', note: noteData, row: '', col: '' };
            let notes = localStorage.getItem('notes');
            let notesObj;
            if ((notes == null)||(notes.length==2)||(notes==[])) {
                notesObj = [];
                note.sNo = 1;
                note.row = 1;
                note.col = 1;
            }
            else {
                notesObj = JSON.parse(notes);
                note.sNo = notesObj[notesObj.length - 1].sNo + 1;
                let col = notesObj[notesObj.length - 1].col + 1;
                let row = notesObj[notesObj.length - 1].row;
                if (col > 4) {
                    row++;
                    col = 1;
                }
                note.row = row;
                note.col = col;

            }
            notesObj.push(note)
            localStorage.setItem('notes', JSON.stringify(notesObj));
            dispatch({type:'HIDE_POP_UP_BAR'})
            dispatch({type:'SET_ALL_NOTES',payload:notesObj})
            dispatch({type:`NOTE_FOR_STEP_${note.col}`,payload:note});
        }
    }
    return (
        <div className='PopUpBox-container'>
            <ClearIcon sx={{ position: 'absolute', right: '0.9rem', top: '0.9rem', fontSize: 23 }} onClick={() => { dispatch({ type: 'HIDE_POP_UP_BAR' }) }} />
            <h2 className='popup-heading'>Add Task</h2>
            <div className="popup-input">
                <input type="text" placeholder='Add Title' onChange={(e) => { setNoteData(e.target.value) }} />
                <Button variant="contained" sx={{ width: '15rem', margin: '1rem 0 0 2rem', backgroundColor: '#f0f0f1', color: 'black', fontSize: '1.4rem', textTransform: 'capitalize',opacity:1.2 }} onClick={addNote}>Add Task</Button>
            </div>
        </div>
    )
}

export default PopUpBox