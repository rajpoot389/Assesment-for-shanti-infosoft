import React from 'react'
import Note from './Note'
import { useGlobalContext } from '../Warehouse/context'

const Steps = () => {
  const stepOneData = useGlobalContext().step_1;
  const stepTwoData = useGlobalContext().step_2;
  const stepThreeData = useGlobalContext().step_3;
  const stepFourData = useGlobalContext().step_4;
  const opacity = useGlobalContext().showPopUp;
  const searchText = useGlobalContext().searchText;

  return (
    <div className={opacity ? 'steps-container opacity-down' : 'steps-container'}>
      <div className="steps" id='step-1'>
        <p>STEP 1</p>
        {
          stepOneData.filter((val) => {
            if (searchText == '')
              return val;
            else if (val.note.toLowerCase().includes(searchText.toLowerCase()))
              return val;

          }).map((val)=>{
            return <Note data={val} key={val.sNo} />
          })
        }
      </div>
      <div className="steps" id='step-2'>
        <p>STEP 2</p>
        {
          stepTwoData.filter((val) => {
            if (searchText == '')
              return val;
            else if (val.note.toLowerCase().includes(searchText.toLowerCase()))
              return val;

          }).map((val)=>{
            return <Note data={val} key={val.sNo} />
          })
        }
      </div>
      <div className="steps" id='step-3'>
        <p>STEP 3</p>
        {
          stepThreeData.filter((val) => {
            if (searchText == '')
              return val;
            else if (val.note.toLowerCase().includes(searchText.toLowerCase()))
              return val;

          }).map((val)=>{
            return <Note data={val} key={val.sNo} />
          })
        }
      </div>
      <div className="steps" id='step-4'>
        <p>STEP 4</p>
        {
          stepFourData.filter((val) => {
            if (searchText == '')
              return val;
            else if (val.note.toLowerCase().includes(searchText.toLowerCase()))
              return val;

          }).map((val)=>{
            return <Note data={val} key={val.sNo} />
          })
        }
      </div>

    </div>
  )
}

export default Steps