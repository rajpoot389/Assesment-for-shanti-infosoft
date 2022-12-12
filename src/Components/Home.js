import React, { useEffect } from 'react'
import Header from './Header'
import PopUpBox from './PopUpBox';
import Steps from './Steps';
import { useGlobalContext } from '../Warehouse/context';
const Home = () => {
    const popupshow = useGlobalContext().showPopUp;
    const dispatch = useGlobalContext().dispatch;
    const allSteps = useGlobalContext().allSteps;
    const alter=useGlobalContext().alterChange;
    const opacity = useGlobalContext().showPopUp;
    
   
    useEffect(() => {
        dispatch({type:"VANISHED"})
        const note = localStorage.getItem('notes');
        if ((note != null)&&(note!=[])) {
            let noteObj = JSON.parse(note)
            for (let i = 0; i < noteObj.length; i++)
            dispatch({ type: `NOTE_FOR_STEP_${noteObj[i].col}`, payload: noteObj[i] })
            dispatch({ type: 'SET_ALL_NOTES', payload: noteObj })
        }
     
    },[alter]);

    return (
        <div className={opacity?'body-container bg-light-dim':'body-container'}>
            <Header />
            {popupshow ? <PopUpBox /> : ""}
            <Steps />
        </div>
    )
}

export default Home

// #b7bcc6b0