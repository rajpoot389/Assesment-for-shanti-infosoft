import React, { useEffect } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { useGlobalContext } from '../Warehouse/context';

const Note = ({ data }) => {
    const allSteps = useGlobalContext().allSteps;
    const stepOne = useGlobalContext().step_1;
    const stepTwo = useGlobalContext().step_2;
    const stepThree = useGlobalContext().step_3;
    const stepFour = useGlobalContext().step_4;
    const dispatch = useGlobalContext().dispatch;

    function moveOnLeft() {
        if (data.col === 4) {
                            const newData = data;
                newData.col = newData.col - 1;
                localStorage.setItem('notes', JSON.stringify(allSteps));
                dispatch({ type: 'POSITION_CNG', payload: allSteps })

        }
        else if (data.col === 3) {
                const newData = data;
                newData.col = newData.col - 1;
                localStorage.setItem('notes', JSON.stringify(allSteps))
                dispatch({ type: 'POSITION_CNG', payload: allSteps })
        }
        else if (data.col === 2) {
                const newData = data;
                newData.col = newData.col - 1;
                localStorage.setItem('notes', JSON.stringify(allSteps))
                dispatch({ type: 'POSITION_CNG', payload: allSteps })
        }
    }

    function moveOnRight() {
        if (data.col === 1) {
                const newData = data;
                newData.col = newData.col + 1;
                localStorage.setItem('notes', JSON.stringify(allSteps))
                dispatch({ type: "TEST", payload: allSteps })
                dispatch({ type: 'POSITION_CNG', payload: allSteps })
        }
        else if (data.col === 2) {
                const newData = data;
                newData.col = newData.col + 1;
                localStorage.setItem('notes', JSON.stringify(allSteps))
                dispatch({ type: 'POSITION_CNG', payload: allSteps })
        }
        else if (data.col === 3) {
                const newData = data;
                newData.col = newData.col + 1;
                localStorage.setItem('notes', JSON.stringify(allSteps))
                dispatch({ type: 'POSITION_CNG', payload: allSteps })
        }

    }

    function deleteNote(NotesData) {
        const result = allSteps.filter((val) => {
            return (JSON.stringify(val) != JSON.stringify(NotesData));
        });
        localStorage.setItem('notes',JSON.stringify(result));
        dispatch({ type: 'POSITION_CNG', payload: allSteps })
    }

    return (
        <div className='note-container'>
            <div className="note-header">
                <p>{data.sNo}</p>
                <Button variant="text" startIcon={<DeleteOutlineRoundedIcon sx={{ marginRight: '-6px', fontWeight: 400 }} />} size="small" sx={{ width: '0.5rem !important', color: 'red', textTransform: 'capitalize', fontSize: '1.2rem', fontWeight: 400 }} onClick={() => deleteNote(data)}>
                    Delete
                </Button>
            </div>
            <div className="note-content">
                <p>{data.note}</p>
            </div>
            <div className="arrows">
                {(data.col === 1) ? <div className='right_arrow'>  <ArrowCircleRightRoundedIcon sx={{ fontSize: 25 }} onClick={moveOnRight} /> </div> : ''}
                {(data.col === 4) ? <ArrowCircleLeftRoundedIcon sx={{ fontSize: 25 }} onClick={moveOnLeft} /> : ''}
                {((data.col > 1) && (data.col) < 4) ? <> <ArrowCircleLeftRoundedIcon sx={{ fontSize: 25 }} onClick={moveOnLeft} /> <ArrowCircleRightRoundedIcon sx={{ fontSize: 25 }} onClick={moveOnRight} /> </> : ''}
            </div>
        </div>
    )
}

export default Note